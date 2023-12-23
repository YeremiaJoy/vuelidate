import Vue from 'vue';

import Pixel, * as Px from '@mekari/pixel';

Vue.use(Pixel, {
  extendTheme: {
    baseStyles: {
      MpText: {
        color: 'dark',
      },
      MpHeading: {
        color: 'dark',
      },
    },
  },
});

export const components = [
  'ThemeProvider',
  // A
  'MpAccordion',
  'MpAccordionHeader',
  'MpAccordionIcon',
  'MpAccordionItem',
  'MpAccordionPanel',
  'MpAutocomplete',
  'MpAvatar',
  // B
  'MpBadge',
  'MpBanner',
  'MpBannerCloseButton',
  'MpBannerDescription',
  'MpBannerIcon',
  'MpBannerLink',
  'MpBannerTitle',
  'MpBox',
  'MpBroadcast',
  'MpButton',
  'MpButtonIcon',
  // C
  'MpCheckbox',
  'MpCheckboxGroup',
  // D
  'MpDatePicker',
  'MpDivider',
  'MpDrawer',
  'MpDrawerBody',
  'MpDrawerCloseButton',
  'MpDrawerContent',
  'MpDrawerFooter',
  'MpDrawerHeader',
  'MpDrawerOverlay',
  'MpDropzone',
  // F
  'MpFlex',
  'MpFormControl',
  'MpFormErrorMessage',
  'MpFormHelpText',
  'MpFormLabel',
  // G
  'MpGrid',
  'MpGridItem',
  // H
  'MpHeading',
  // I
  'MpIcon',
  'MpImage',
  'MpInput',
  'MpInputGroup',
  'MpInputTag',
  'MpInputLeftAddon',
  'MpInputRightAddon',
  // L
  'MpListUpload',
  // M
  'MpModal',
  'MpModalBody',
  'MpModalCloseButton',
  'MpModalContent',
  'MpModalFooter',
  'MpModalHeader',
  'MpModalOverlay',
  // P
  'MpPopover',
  'MpPopoverContent',
  'MpPopoverHeader',
  'MpPopoverList',
  'MpPopoverListItem',
  'MpPopoverTrigger',
  'MpPopoverPanel',
  'MpPseudoBox',
  // R
  'MpReset',
  'MpRadio',
  'MpRadioGroup',
  // S
  'MpSegmentedControl',
  'MpSelect',
  'MpSimpleGrid',
  'MpSpinner',
  'MpStack',
  // T
  'MpTab',
  'MpTable',
  'MpTableBody',
  'MpTableCell',
  'MpTableContainer',
  'MpTableHead',
  'MpTableRow',
  'MpTabs',
  'MpTabList',
  'MpTabPanels',
  'MpTabPanel',
  'MpText',
  'MpTextarea',
  'MpTimeline',
  'MpTimelineItem',
  'MpTimelineTitle',
  'MpTimelineCaption',
  'MpTimelineContent',
  'MpTimelineDocument',
  'MpTimelineLog',
  'MpTimelineLogItem',
  'MpTimelineAccordion',
  'MpTooltip',
  'MpToggle',
  // U
  'MpUpload',
];

components.forEach(name => {
  Vue.component(name, Px[name]);
});

Vue.use(Pixel)

export default {
  components,
};
