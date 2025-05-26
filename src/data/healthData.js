export const healthData = {
  anatomy: {
    heart: { status: 'Healthy', value: 98 },
    lungs: { status: 'Good', value: 95 },
    teeth: { status: 'Needs Attention', value: 85 },
    bone: { status: 'Excellent', value: 99 },
  },
  statusCards: [
    {
      id: 1,
      title: 'Lungs',
      status: 'Good',
      value: 95,
      icon: 'Lung',
    },
    {
      id: 2,
      title: 'Teeth',
      status: 'Needs Attention',
      value: 85,
      icon: 'Tooth',
    },
    {
      id: 3,
      title: 'Bone',
      status: 'Excellent',
      value: 99,
      icon: 'Bone',
    },
  ],
  activityFeed: {
    totalAppointments: 3,
    chartData: [65, 75, 85, 70, 90, 80, 95],
  },
}; 