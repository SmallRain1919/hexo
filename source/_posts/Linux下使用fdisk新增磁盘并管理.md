---
title: Linux下使用fdisk新增磁盘并管理
date: 2025-01-18 15:40:00
tags:
  - Linux       
  - 磁盘管理
---

## Linux下使用fdisk新增磁盘并管理

如果是需要新增硬盘并且分区，有这篇文章就够了

### 1. 查看磁盘信息
```basd
admin@localhost:~$ lsblk -l
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0    7:0    0  74.2M  1 loop /snap/core22/1621
loop1    7:1    0     4K  1 loop /snap/bare/5
loop2    7:2    0  73.9M  1 loop /snap/core22/1722
loop3    7:3    0  11.7M  1 loop /snap/desktop-security-center/32
loop4    7:4    0  11.7M  1 loop /snap/desktop-security-center/43
loop5    7:5    0   272M  1 loop /snap/firefox/5091
loop6    7:6    0  10.7M  1 loop /snap/firmware-updater/127
loop7    7:7    0  11.1M  1 loop /snap/firmware-updater/147
loop8    7:8    0 505.1M  1 loop /snap/gnome-42-2204/176
loop9    7:9    0  91.7M  1 loop /snap/gtk-common-themes/1535
loop10   7:10   0  89.7M  1 loop /snap/gtk-common-themes/1536
loop11   7:11   0    14M  1 loop /snap/prompting-client/51
loop12   7:12   0  14.3M  1 loop /snap/prompting-client/80
loop13   7:13   0  10.7M  1 loop /snap/snap-store/1218
loop14   7:14   0  10.8M  1 loop /snap/snap-store/1248
loop15   7:15   0  38.8M  1 loop /snap/snapd/21759
loop16   7:16   0  44.4M  1 loop /snap/snapd/23545
loop17   7:17   0   564K  1 loop /snap/snapd-desktop-integration/247
loop18   7:18   0   568K  1 loop /snap/snapd-desktop-integration/253
sda      8:0    0   200G  0 disk
sda1     8:1    0     1M  0 part
sda2     8:2    0   200G  0 part /
sdb      8:16   0   200G  0 disk
sr0     11:0    1   5.3G  0 rom  /media/admin/Ubuntu 24.10 amd64

# sda是系统盘，sdb是新增的硬盘
```

### 2. 给新增的硬盘分区
```bash
admin@localhost:~$ sudo fdisk /dev/sdb
Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)  
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-419430399, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-419430399, default 419430399): +100G
Created a new partition 1 of type 'Linux' and of size 100 GiB.
Command (m for help): w
The partition table has been altered.
```
### 3. 查看分区信息
```bash
admin@localhost:~$ sudo fdisk -l /dev/sdb
Disk /dev/sdb：200 GiB，214748364800 字节，419430400 个扇区
Disk model: QEMU HARDDISK
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x42c1ed73

设备       启动  起点      末尾      扇区  大小 Id 类型
/dev/sdb1        2048 209717247 209715200  100G 83 Linux
```
> 可以看倒`/dev/sdb1`是新增的分区

### 4. 格式化分区
```bash
admin@localhost:~$ sudo mkfs.ext4 /dev/sdb1
mke2fs 1.47.1 (20-May-2024)
丢弃设备块： 完成
创建含有 26214400 个块（每块 4k）和 6553600 个 inode 的文件系统
文件系统 UUID：6fbe5a64-ae06-4e2f-aaf4-49c1064eafae
超级块的备份存储于下列块：
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624, 11239424, 20480000, 23887872

正在分配组表： 完成
正在写入 inode表： 完成
创建日志（131072 个块）： 完成
写入超级块和文件系统账户统计信息： 已完成
```

### 5. 挂载分区
```bash 
admin@localhost:~$ sudo mkdir /data
admin@localhost:~$ sudo mount /dev/sdb1 /data
```

### 6. 查看挂载情况
```bash
admin@localhost:~$ df -h
文件系统        大小  已用  可用 已用% 挂载点
tmpfs           1.6G  1.7M  1.6G    1% /run
/dev/sda2       196G   12G  175G    7% /
tmpfs           7.6G     0  7.6G    0% /dev/shm
tmpfs           5.0M     0  5.0M    0% /run/lock
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-journald.service
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-udev-load-credentials.service
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-tmpfiles-setup-dev-early.service
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-tmpfiles-setup-dev.service
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-sysctl.service
tmpfs           7.6G   16K  7.6G    1% /tmp
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-tmpfiles-setup.service
tmpfs           1.0M     0  1.0M    0% /run/credentials/systemd-resolved.service
tmpfs           1.6G  124K  1.6G    1% /run/user/1001
/dev/sr0        5.3G  5.3G     0  100% /media/admin/Ubuntu 24.10 amd64
/dev/sdb1        98G  2.1M   93G    1% /data
```
> 可以看到`/dev/sdb1`已经挂载到`/data`目录下

### 7. 开机自动挂载
```bash
admin@localhost:~$ sudo vim /etc/fstab
# 在文件末尾添加
/dev/sdb1 /data ext4 defaults 0 0
```
或者使用硬盘的UUID来挂载
```bash
admin@localhost:~$ sudo blkid
/dev/sda2: UUID="f4b1b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b" TYPE="ext4" PARTUUID="1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b"
admin@localhost:~$ sudo vim /etc/fstab
# 在文件末尾添加
UUID=6fbe5a64-ae06-4e2f-aaf4-49c1064eafae /data ext4 defaults 0 0
```
> 查看硬盘的UUID可以使用`blkid`命令

> 保存退出后，重启电脑，分区就会自动挂载了



### 8. 卸载分区
```bash
admin@localhost:~$ sudo umount /data
```
