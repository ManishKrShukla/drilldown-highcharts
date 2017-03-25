import { HighchartsDrilldownPage } from './app.po';

describe('highcharts-drilldown App', () => {
  let page: HighchartsDrilldownPage;

  beforeEach(() => {
    page = new HighchartsDrilldownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
