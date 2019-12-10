import React from 'react';
import { Title, Text, PageSection } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table'
import SideNavLayout from 'gatsby-theme-patternfly-org/layouts/sideNavLayout';

const mapComponentToRow = ({ component, testCases }) => {
  return {
    cells: [
      <div>{component}</div>,
      ...testCases
    ]
  }
}

export default ({ location }) => {
  const columns = [
    'Component', 'Axe Tested', 'Keyboard Tested', 'Voiceover Tested (Safari)', 'Voiceover Tested (Chrome)'
  ];

  const red = '#e06666';
  const green = '#93c47d';
  const yellow = '#ffd966';

  const rows = [
    {
      component: 'About modal',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Accordion',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Alert',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Application Launcher',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Accessible but ensure consistency</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, distinguish different app launchers on page</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, distinguish different app launchers on page</div>
      ]
    },
    {
      component: 'Avatar',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Background Image',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>link to background img</div>,
        <div style={{backgroundColor: yellow}}>link to background img</div>
      ]
    },
    {
      component: 'Badge',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Brand',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Breadcrumb',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, better links and headings</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, better links and headings</div>
      ]
    },
    {
      component: 'Button',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Card',
      testCases: [
        <div style={{backgroundColor: red}}>Img text, unique ids</div>,
        <div style={{backgroundColor: yellow}}>Hover should show when tab focus to card</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Checkbox',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}>form controls could use improvement</div>,
        <div style={{backgroundColor: green}}>form controls could use improvement</div>
      ]
    },
    {
      component: 'Chip group',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Clipboard copy',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}>form control with code?</div>,
        <div style={{backgroundColor: green}}>form control with code?</div>
      ]
    },
    {
      component: 'Context Selector',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Accessible but ensure consistency</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Data list',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, links and form controls</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor, links and form controls</div>
      ]
    },
    {
      component: 'Dropdown',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Accessible but ensure consistency</div>,
        <div style={{backgroundColor: green}}>Links and form controls could use improvement</div>,
        <div style={{backgroundColor: green}}>Links and form controls could use improvement</div>
      ]
    },
    {
      component: 'Empty state',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Headings?</div>,
        <div style={{backgroundColor: yellow}}>Headings?</div>
      ]
    },
    {
      component: 'Expandable',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Form',
      testCases: [
        <div style={{backgroundColor: red}}>form label</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Form select',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Input group',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: red}}>Date selector not accessible</div>,
        <div style={{backgroundColor: yellow}}>Form controls, ex: Button button</div>,
        <div style={{backgroundColor: yellow}}>Form controls, ex: Button button</div>
      ]
    },
    {
      component: 'Label',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'List',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Login page',
      testCases: [
        <div style={{backgroundColor: red}}>Link text</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: red}}>Two main landmarks, same links</div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Modal',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Navigation',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Should we support arrow keys?</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (global navigation, links), headings- SR Link?</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (global navigation, links), headings- SR Link?</div>
      ]
    },
    {
      component: 'Notification badge',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Options menu',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Page',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (banner and main), links</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (banner and long content)</div>
      ]
    },
    {
      component: 'Pagination',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Accessible but ensure consistency</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (navs)</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (navs)</div>
      ]
    },
    {
      component: 'Popover',
      testCases: [
        <div style={{backgroundColor: red}}>Form has label</div>,
        <div style={{backgroundColor: yellow}}>Shift focus back to toggle</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Progress',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Radio',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Select',
      testCases: [
        <div style={{backgroundColor: red}}>Form labels, unique ids</div>,
        <div style={{backgroundColor: yellow}}>Accessible but ensure consistency</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Skip to content',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}>Headings?</div>,
        <div style={{backgroundColor: green}}>Headings?</div>
      ]
    },
    {
      component: 'Switch',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Table',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Opt out version? Issue #1882</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Tabs',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Should we support arrow keys?</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (local navs)</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (local navs)</div>
      ]
    },
    {
      component: 'Text',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}>Heading sizes?</div>,
        <div style={{backgroundColor: green}}>Heading sizes?</div>
      ]
    },
    {
      component: 'Text area',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Text input',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Title',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}>Heading sizes?</div>,
        <div style={{backgroundColor: green}}>Heading sizes?</div>
      ]
    },
    {
      component: 'Tooltip',
      testCases: [
        <div style={{backgroundColor: red}}>Title, aria hidden on icon, form on positions</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Topology view',
      testCases: [
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: yellow}}>Tab vs arrows?</div>,
        <div style={{backgroundColor: green}}></div>,
        <div style={{backgroundColor: green}}></div>
      ]
    },
    {
      component: 'Wizard',
      testCases: [
        <div style={{backgroundColor: yellow}}>Color contrast of back button</div>,
        <div style={{backgroundColor: red}}>Side panel not accessible</div>,
        <div style={{backgroundColor: red}}>Landmarks repeated in rotor (mains)</div>,
        <div style={{backgroundColor: red}}>Two mains, but one set and other isn't, clean up wordings?</div>
      ]
    },
  ].map(mapComponentToRow);

  return (
    <SideNavLayout location={location} context="react">
      <PageSection className="ws-section">
        <Title size="md" className="ws-framework-title">React</Title>
        <Title size="4xl">Accessibility status</Title>
        <Text>This is our PatternFly-React accessibility status report.<br/>
          <b>Axe violations</b> are shown in red, warnings are not covered as a part of this report.<br/>
          <b>Keyboard testing</b> is based on accessible design expectations. Components that are not currently accessible are shown in red, components in question or where consistency should be considered are in yellow.<br/>
          PatternFly is aiming for full support for <b>Voiceover</b> as our main screen reader. We are aware of issues that affect all components in voiceover, but this report shows individual differences among components. The focus in this report is on accessible navigation, usability, and easily understood content. PatternFly is dedicated to achieving a good user experience for all users.<br/>
          <br/>
        </Text>
        <Table aria-label="A11y component status" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </PageSection>
    </SideNavLayout>
  );
};
