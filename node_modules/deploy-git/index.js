#!/usr/bin/env node
/**
 * @file:      命令行提交至git分支
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2016-11-02 18:53:23
 */

'use strict';
var deployer = require('./lib/deployer.js');
var path = require('path');
var fs = require('fs');
var packageJson = path.join(process.cwd(), 'package.json');
var config = JSON.parse(fs.readFileSync(packageJson).toString());
var deploy = config.deploy || {};
deployer(deploy);