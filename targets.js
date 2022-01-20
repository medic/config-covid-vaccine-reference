const extras = require('./nools-extras');
const {
  getField
} = extras;

module.exports = [

  {
    id: 'fully-vaccinated',
    type: 'percent',
    icon: 'icon-immunization',
    goal: 100,
    translation_key: 'targets.covid_vaccination.vaccinated.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType: ['covid_vaccine_registration'],
    appliesIf: function (contact, report) {
      return getField(report, 'vaccination_details.received_covid_vaccine') === 'yes' || getField(report, 'vaccination_details.received_covid_vaccine') === 'no';
    },
    passesIf: function (contact, report) {
      return getField(report, 'vaccination_status.all_doses_taken') === 'yes';
    },
    date: 'now',
    idType: 'contact',
  },

  {
    id: 'missed-appointments',
    type: 'count',
    icon: 'icon-immunization',
    goal: -1,
    translation_key: 'targets.covid_vaccination.missed_appointments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['covid_vaccine_registration'],
    appliesIf: function (contact, report) {
      return getField(report, 'vaccination_status.dose_incompletion_reason') === 'missed_appointment';
    },
    date: 'now',
    idType: 'contact'
  },

  {
    id: 'upcoming-vaccination-appointments',
    type: 'count',
    icon: 'icon-immunization',
    goal: -1,
    translation_key: 'targets.covid_vaccination.upcoming_appointments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['covid_vaccine_registration'],
    appliesIf: function (contact, report) {
      return getField(report, 'vaccination_status.dose_incompletion_reason') === 'upcoming_appointment';
    },
    date: 'now',
    idType: 'contact'
  },


  {
    id: 'vaccination-reffaral-completion-rates',
    type: 'percent',
    icon: 'icon-follow-up',
    goal: 100,
    translation_key: 'targets.covid_vaccination.referral_completion_rates.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['covid_vaccine_referral_follow_up'],
    appliesIf: function (contact, report) {
      return getField(report, 'referral_details.visited_facility') === 'yes' || getField(report, 'referral_details.visited_facility') === 'no';
    },
    passesIf: function (contact, report) {
      return getField(report, 'referral_details.visited_facility') === 'yes';
    },
    date: 'now',
    idType: 'contact'
  },

];
