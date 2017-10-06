import { MyWeddingPage } from './app.po';

describe('my-wedding App', () => {
  let page: MyWeddingPage;

  beforeEach(() => {
    page = new MyWeddingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
