const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'What can this bot do?\n\nIt’s time to earn money on your bio data & health!\nSwitch boring health tracking into fun & money!\n\nBoost your health. Upgrade your life. Get free seconds of your life. Earn more. Get hours of life. Convert them into years. Exchange your years of your life into fiat money on the top crypto exchanges.\n\nStage One:\n\nGet health incentives, get recommendations how to upgrade your health & life, invite like-minded friends and become millionaires by the hours of life. Make money on your health data! You want more?\n\nStage Two:\n\nUpload your bio data to unlock the next level of your benefits based on your active lifespan. Get a longevity NFT collection. Become an equity holder of Longevity InTime.\n\nStage Three:\n\nNot enough, become a part of the professional longevity community, who don’t want to die & save your loved ones, yourself & the world!\n\nStage Four:\n\nAirDrop. Listing. Profit.', {
    reply_markup: {
      keyboard: [['Play', 'Stages'], ['Explanation', 'About']],
      resize_keyboard: true
    }
  });
});

// Handling Play Button
bot.onText(/Play/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Loading...');

  bot.sendMessage(chatId, 'Tap To Earn & Live Longer - Mini App is loading. Please wait...');

  bot.sendMessage(chatId, 'Get Longevity Coin from the top exchanges. Soon on TON network.');
});

// Handling Stages Button
bot.onText(/Stages/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Stages of the game:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Stage 1', callback_data: 'stage1_rules' }],
        [{ text: 'Stage 2', callback_data: 'stage2_rules' }],
        [{ text: 'Stage 3', callback_data: 'stage3_rules' }]
      ]
    }
  });
});

// Handling Callback Queries


// Handling About Button
bot.onText(/About/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'About Tap to Earn & Live Longer Mini App: This game allows you to earn coins based on your health and longevity. Enjoy and learn more about maintaining a healthy life!');
});

bot.onText(/Explanation/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Ready to become a millionaire in hours of your life and in money?\n\nThis game is about how to earn coins on improving your health & live longer in real life & in the game.\n\nThis game differs from others - it’s not about getting more coins in the game, it’s about saving as many coins as you can from the ones which were given to you for free. Don’t waste your life & coins in the game.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Next', callback_data: 'explanation_next_1' }]
      ]
    }
  });
});

bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  let responseText = '';
  switch (data) {
    case 'stage1_rules':
      responseText = 'Stage 1 Rules: Coming soon';
      bot.sendMessage(chatId, responseText);
      break;
    case 'stage2_rules':
      responseText = 'Stage 2 Rules: Coming soon';
      bot.sendMessage(chatId, responseText);
      break;
    case 'stage3_rules':
      responseText = 'Stage 3 Rules: Coming soon';
      bot.sendMessage(chatId, responseText);
      break;
    case 'explanation_next_1':
      responseText = 'If you play well, you can earn more coins. Like in life, you live a healthy life, you live a longer active life.\n\nThe game & coins are backed by real US based biotech company, which made research for 6 years, prior of launching this game and its products. None of Mini Apps on Telegram have that level of trust from people who are “behind the scene”';
      bot.sendMessage(chatId, responseText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Next', callback_data: 'explanation_next_2' }]
          ]
        }
      });
      break;
    case 'explanation_next_2':
      responseText = 'Your real life is like a time bomb with a countdown. Always remember it, when you play this game!\n\nYou will be given 120 years of life converted into free  3,784,320,000 seconds of your game life. It’s only 1,051,200 hours of life. Just think for a second how small this amount is!\n\n1 second is 1 coin. 1 second of your real life equals wasting 1 second in your game life.\n\nRemember it’s a countdown, unless you do simple things in life to maintain your health and simple tasks in this game\n\nScientists confirm that it’s real - to live today up to 120 years. We believe you can survive in this game and convert your seconds into coins and sell them after listing on the top exchanges and become a millionaire.';
      bot.sendMessage(chatId, responseText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Next', callback_data: 'explanation_next_3' }]
          ]
        }
      });
      break;
    case 'explanation_next_3':
      responseText = 'Tap the HEART button below to avoid wasting your game life.\n\nPlace the red heart below the main screen as in Hamster app (the blue circle is placed)\n\nHeart button illustrates the main organ in the body. Actually there are 78 human organs and life wouldn’t be possible without 5 of them, but the heart as well as brain are crucial for non vegetative living.\n\nAverage heart rate is 60-100 beats per minute. Better physically fit you are, lower heart rate is. It can be lower up to 40 beats per minute  and it’s ok for a sports individual.';
      bot.sendMessage(chatId, responseText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Next', callback_data: 'explanation_next_4' }]
          ]
        }
      });
      break;
    case 'explanation_next_4':
      responseText = 'You should tap at least 40 times per minute to avoid wasting your game seconds. 40 taps will maintain the amount of your game life. Seconds won’t be burning in this case.\n\nIf you tap less than 40 times or more than 100 times, your game life will be ending quicker \n\nThere are other ways to keep your game life longer.\n\nExplore “Long Life” cards They disclose what to do in real life to extend your active lifespan. These cards extend your seconds of life  in the game. Upgrade them every day.';
      bot.sendMessage(chatId, responseText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Next', callback_data: 'explanation_next_5' }]
          ]
        }
      });
      break;
    case 'explanation_next_5':
      responseText = 'Explore “Short Life” cards They disclose what causes shorter life. Avoid doing it in real life to extend your active lifespan in real life. These cards are wasting your life in the game. You must upgrade them too, to have access to “Long cards”\n\nMore “Long cards” you open & upgrade, longer game life you will have. Remember some Short Life cards should be opened first.\n\nThis is Stage One of the Game. Follow these simple tasks & you will highly likely become millionaire in hours of life & money. Learn more about Stage Two & Three in the Stages section\n\nYou can always return to this information in the “Rules” button at the bottom of the screen ';
      bot.sendMessage(chatId, responseText);
      break;
  }
  
});

