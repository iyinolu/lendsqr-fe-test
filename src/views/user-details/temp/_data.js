export const _personal_data = [
  {
    title: 'FULL NAME',
    renderer: (data) => {
      console.log(data)
      return `${data.profile?.firstName ?? '-'} ${data.profile?.lastName ?? '-'}`
    },
  },
  { title: 'PHONE NUMBER', path: 'profile.phoneNumber' },
  { title: 'EMAIL ADDRESS', path: 'email' },
  { title: 'BVN', path: 'profile.bvn' },
  { title: 'GENDER', path: 'profile.gender' },
  { title: 'MARITAL STATUS', default: 'Single' },
  { title: 'CHILDREN', default: 'None' },
  { title: 'TYPE OF RESIDENCE', default: 'Apartment' },
]

export const _education_data = [
  { title: 'LEVEL OF EDUCATION', path: 'education.level' },
  { title: 'EMPLOYMENT STATUS', path: 'education.employmentStatus' },
  { title: 'SECTOR OF EMPLOYMENT', path: 'education.sector' },
  { title: 'DURATION OF EMPLOYMENT', path: 'education.duration' },
  { title: 'OFFICE EMAIL', path: 'education.officeEmail' },
  {
    title: 'MONTHLY INCOME',
    renderer: (data) =>
      `${data.education?.monthlyIncome[0] ?? '-'} - ${data.education?.monthlyIncome[1] ?? '-'}`,
  },
  { title: 'LOAN REPAYMENT', default: '40,000' },
]

export const _social_data = [
  { title: 'TWITTER', path: 'socials.twitter' },
  { title: 'FACEBOOK', path: 'socials.facebook' },
  { title: 'INSTAGRAM', path: 'socials.instagram' },
]

export const _guarantor_data = [
  {
    title: 'FULL NAME',
    renderer: (data) => `${data.guarantor?.firstName ?? '-'} ${data.guarantor?.lastName ?? '-'}`,
  },
  { title: 'PHONE NUMBER', path: 'guarantor.phoneNumber' },
  { title: 'EMAIL ADDRESS', default: 'default@email.com' },
  { title: 'RELATIONSHIP', default: 'Friend' },
]
