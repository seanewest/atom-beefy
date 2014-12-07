#!/usr/bin/env node

var atom = require('atom-shell')
var proc = require('child_process')
var args = process.argv.slice(2);
var atom_entry = __dirname + "/index.js";
var atom_args = [atom_entry].concat(args);
var child = proc.spawn(atom, atom_args);
