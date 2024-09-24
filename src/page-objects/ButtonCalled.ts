import { includes } from '@serenity-js/assertions';
import { Answerable} from '@serenity-js/core';
import { By, PageElements, Text } from '@serenity-js/web';


export const buttonCalled = (name: Answerable<string>) =>
    PageElements.located(By.css('div div button span'))
      .where(Text, includes(name))
      .first()
