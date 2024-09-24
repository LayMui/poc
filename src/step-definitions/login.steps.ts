import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';
import { Login } from '../tasks/Login';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} has an active account with admin role', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('http://localhost:3001/react-gh-pages'),
    )
);

When('{pronoun} attempts to log in to the system with the correct credential', async (actor: Actor, table: DataTable)  => {
    const email = table.hashes()[0].email
    actor.attemptsTo( 
      Login.usingAzureAD(email)
    )
}
);


/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then('{pronoun} is able to access to the system', async (actor: Actor) =>
    actorInTheSpotlight().attemptsTo(
      
    )
)
   
   

