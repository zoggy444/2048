// Generated from: tests/game_page.feature
import { test } from "../../tests/fixtures.ts";

test.describe('Game page', () => {

  test('Landing on the page', async ({ When, page, Then, And }) => { 
    await When('I land on the game page', null, { page }); 
    await Then('I should see a "Connect 4" title', null, { page }); 
    await And('I should see an empty 7x6 board', null, { page }); 
    await And('it should be player 1\'s turn', null, { page }); 
  });

  test('Player\'s turn', async ({ Given, page, When, Then }) => { 
    await Given('I am on the game page', null, { page }); 
    await When('I hover over a column', null, { page }); 
    await Then('the column should highlight', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/game_page.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When I land on the game page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Connect 4\" title","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And I should see an empty 7x6 board","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And it should be player 1's turn","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the game page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I hover over a column","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the column should highlight","stepMatchArguments":[]}]},
]; // bdd-data-end