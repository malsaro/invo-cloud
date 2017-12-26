import { InvoAdminPage } from './app.po';

describe('invo-admin App', function() {
  let page: InvoAdminPage;

  beforeEach(() => {
    page = new InvoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
