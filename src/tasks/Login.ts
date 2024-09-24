import { Duration, Task, Wait } from '@serenity-js/core';
import { Click, Enter, isVisible, PageElement} from '@serenity-js/web';
import { buttonCalled } from '../page-objects/ButtonCalled';
import { traveLlistButtonCalled } from '../page-objects/TravelListButtonCalled';
import { itemCalled } from '../page-objects/ItemCalled';
import { byType } from '../page-objects/ByType';
/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const Login = {
    usingAzureAD: (email: string) =>
        Task.where(`#actor login with ${email}`,
            Wait.upTo(Duration.ofMinutes(5)).until(
               traveLlistButtonCalled("Add"),
                    isVisible()),
            // Wait.upTo(Duration.ofMinutes(5)).until(
            //    buttonCalled("Log in Via SSO"),
            //     isVisible()),
               
            //  Click.on(buttonCalled("Log in Via SSO")),
            // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
            //     PageElement.located(byType('email')),
            //      isVisible()),
            //      Enter.theValue(email).into(PageElement.located(byType('email'))),
        ),
    

        usingCredentials: (name: string) =>
            Task.where(`#actor login with ${name}`,
                Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                   itemCalled(name),
                    isVisible()),
                Click.on(itemCalled(name)),
            ),
        
       
}
