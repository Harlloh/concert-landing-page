import {test} from 'node:test';
import assert from 'node:assert/strict';
import {publishedMinisters} from '../src/data/event.js';
import {proposedMinisters} from '../src/data/lineup.proposed.js';
test('all eight supplied proposals remain internal and unconfirmed',()=>{assert.equal(proposedMinisters.length,8);assert.equal(publishedMinisters(proposedMinisters).length,0);assert.ok(proposedMinisters.every(minister=>minister.status==='proposed'&&minister.publicationApproved===false));});
test('public announcements require confirmation and explicit approval',()=>{const yes={status:'confirmed',publicationApproved:true};assert.deepEqual(publishedMinisters([yes,{status:'confirmed',publicationApproved:false},{status:'proposed',publicationApproved:true}]),[yes]);});
