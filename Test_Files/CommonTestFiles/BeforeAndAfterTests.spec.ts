import { test, expect } from '@playwright/test';
import { getEnvironmentByName } from '../CommonCode/EnvironmentData';

// This async function is an example setup procedure that you might use before all tests.
async function globalSetup() {
  console.log("You've reached globalSetup()");
}

// This async function is an example cleanup procedure that you might use after all tests.
async function globalTeardown() {
  // Global cleanup logic goes here
  console.log("You've reached globalTeardown()");
}

// beforeAll hook runs once before all the tests in this file
test.beforeAll(async () => {
  await globalSetup();
});

// afterAll hook runs once after all the tests in this file
test.afterAll(async () => {
  await globalTeardown();
});
