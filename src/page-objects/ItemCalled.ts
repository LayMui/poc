import { includes } from '@serenity-js/assertions';
import { Answerable} from '@serenity-js/core';
import { By, PageElements, Text } from '@serenity-js/web';


export const itemCalled = (name: Answerable<string>) =>
    PageElements.located(By.css('div div div'))
      .where(Text, includes(name))
      .first()


      
