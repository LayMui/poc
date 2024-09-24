import { includes } from '@serenity-js/assertions';
import { Answerable} from '@serenity-js/core';
import { By, PageElements, Text } from '@serenity-js/web';


export const traveLlistButtonCalled = (name: Answerable<string>) =>
    PageElements.located(By.css('button'))
      .where(Text, includes(name))
      .first()
