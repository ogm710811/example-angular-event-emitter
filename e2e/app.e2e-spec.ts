import { ChildToParentPage } from './app.po';

describe('child-to-parent App', () => {
  let page: ChildToParentPage;

  beforeEach(() => {
    page = new ChildToParentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
