export interface NavItem {
  name: string;
  url: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'speedometer2'
  },
  {
    name: 'About',
    url: '/about',
    icon: 'star'
  },
  {
    name: 'Update Concept',
    url: '/concept',
    icon: 'text-indent-left'
  },
  {
    name: 'Enquiries',
    url: '/enquiry',
    icon: 'card-text'
  },
  {
    name: 'Member Enquiries',
    url: '/memberEnquiry',
    icon: 'geo-alt'
  },
  {
    name: 'Member Message',
    url: '/memberMessage',
    icon: 'geo-alt'
  },
  {
    name: 'Plan',
    url: '/plan',
    icon: 'card-text'
  },
  {
    name: 'Members',
    url: '/members',
    icon: 'people'
  },
  {
    name: 'Booking',
    url: '/bookings',
    icon: 'pencil'
  },
  {
    name: 'Amenities',
    url: '/amenities',
    icon: 'geo-alt'
  },
  {
    name: 'Courses',
    url: '/courses',
    icon: 'layers'
  },
  {
    name: 'Blog',
    url: '/blog',
    icon: 'text-indent-left'
  },
  {
    name: 'Events',
    url: '/events',
    icon: 'calendar'
  },
  {
    name: 'Team',
    url: '/team',
    icon: 'star'
  },
  {
    name: 'FAQ',
    url: '/faq',
    icon: 'credit-card'
  }
];
