import { AttributeDirectivePage } from './app.po';

describe('attribute-directive App', function() {
  let page: AttributeDirectivePage;

  beforeEach(() => {
    page = new AttributeDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
