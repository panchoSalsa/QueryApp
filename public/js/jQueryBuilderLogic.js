// Rules based on https://dmsc.mind.uci.edu/redcap/redcap_v7.0.9/Design/data_dictionary_codebook.php?pid=141


$('#builder').queryBuilder({
	filters: [{
    id: 'record_id',
    label: 'record_id',
    type: 'integer',
    operators: ['equal', 'not_equal', 'contains'],
    validation: {
      min: 0
    }
  },
  {
    id: 'cur_sex',
    label: 'sex',
    type: 'integer',
    input: 'select',
    values: {
      1: 'Male',
      2: 'Female'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dob',
    label: 'dob',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_city',
    label: 'city',
    type: 'string',
    operators: ['equal', 'not_equal', 'contains']
  },
  {
    id: 'cur_state',
    label: 'state',
    type: 'string',
    input: 'select',
    values: ['CA', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AS', 'DC', 'FM', 'GU', 'MH', 'MP', 'PW', 'PR', 'VI', 'AE', 'AA', 'AP'],
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_zip',
    label: 'zipcode',
    type: 'string',
    operators: ['equal', 'not_equal', 'contains']
  },
  // {
  //   id: 'cur_race',
  //   label: 'race',
  //   type: 'string',
  //   input: 'checkbox',
  //   multiple: true,
  //   default_value: '13',
  //   values: {
  //     '10': 'White',
  //     '11': 'Black or African American',
  //     '12': 'Asian',
  //     '13': 'Latino',
  //     '14': 'American Indian or Alaska Native',
  //     '15': 'Native Hawaiian or Other Pacific Islander',
  //     '88': 'Other',
  //     '77': 'Refuse'
  //   },
  //   operators: ['in','equal', 'not_equal',]
  // },
  {
    id: 'cur_race',
    label: 'race',
    type: 'string',
    input: 'checkbox',
    default_value: '13',
    values: {
      '10': 'White',
      '11': 'Black or African American',
      '12': 'Asian',
      '13': 'Latino',
      '14': 'American Indian or Alaska Native',
      '15': 'Native Hawaiian or Other Pacific Islander',
      '88': 'Other',
      '77': 'Refuse'
    },
    operators: ['equal', 'not_equal',]
    // operators: ['equal', 'not_equal',],
    // validation: {
    //   callback: function (rule, value) {
    //     console.log(value.value);
    //     // value.value = ["10"];
    //     true;
    //   } 
    // } 
  },
  {
    id: 'redcap_event_name',
    label: 'redcap_event_name',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_last_update',
    label: 'last_update',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_tm_start',
    label: 'tm_start',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_rcv_calls',
    label: 'rcv_calls',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_rcv_emails',
    label: 'rcv_emails',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_rcv_mail',
    label: 'rcv_mail',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_pref_contact_method',
    label: 'pref_contact_method',
    type: 'string',
    input: 'select',
    default_value: '1',
    values : {
      1: 'Email',
      2: 'Telephone',
      3: 'Mail'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_ref_method',
    label: 'ref_method',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'My doctor told me about the UCI C2C',
      2: 'I attended a community talk by a UCI researcher',
      3: 'I saw a newspaper article',
      4: 'I saw a television story',
      5: 'I heard a radio story',
      6: 'I found UCI C2C through an online search',
      7: 'I connected through social media',
      8: 'A friend emailed or told me about C2C',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_ref_method_other',
    label: 'ref_method_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_signup_enewsletter',
    label: 'signup_enewsletter',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_signup_tweets',
    label: 'signup_tweets',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_approved_meds',
    label: 'appr_approved_meds',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_invs_meds',
    label: 'appr_invs_meds',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_diet_ex',
    label: 'appr_diet_ex',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_blood',
    label: 'appr_blood',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_cog_test',
    label: 'appr_cog_test',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_mri',
    label: 'appr_mri',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_pet_scan',
    label: 'appr_pet_scan',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_lumbar_punc',
    label: 'appr_lumbar_punc',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_autopsy',
    label: 'appr_autopsy',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_irvine_campus',
    label: 'appr_irvine_campus',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_appr_orange_medical_center',
    label: 'appr_orange_medical_center',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_provide_samples_blood',
    label: 'provide_samples_blood',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_provide_samples_dna',
    label: 'provide_samples_dna',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_provide_samples_dna_kit',
    label: 'provide_samples_dna_kit',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_height_feet',
    label: 'height_feet',
    type: 'integer',
    operators: ['equal', 'not_equal'],
    validation: {
      min: 0,
      max: 8
    }
  },
  {
    id: 'cur_height_inches',
    label: 'height_inches',
    type: 'integer',
    operators: ['equal', 'not_equal'],
    validation: {
      min: 0,
      max: 11
    }
  },
  {
    id: 'cur_weight',
    label: 'weight',
    type: 'integer',
    operators: ['equal', 'not_equal'],
    validation: {
      min: 50,
      max: 400
    }
  },
  {
    id: 'cur_partner',
    label: 'partner',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_race_other',
    label: 'race_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_ethnicity',
    label: 'ethnicity',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: 'Latino',
      1: 'No-Latino',
      7: 'Refuse'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_edu_years',
    label: 'edu_years',
    type: 'integer',
    operators: ['equal', 'not_equal', 'greater', 'less'],
    validation: {
      min: 0,
      max: 88
    }
  },
  {
    id: 'cur_spoke_lang',
    label: 'spoke_lang',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'English',
      2: 'Spanish',
      3: 'Cantonese',
      4: 'Mandarin',
      5: 'Japanese',
      6: 'Korean',
      7: 'Vietnamese',
      17: 'Filipino/Tagalog',
      18: 'Thai',
      8: 'Farsi',
      9: 'Russian',
      10: 'Somali',
      11: 'Arabic',
      12: 'Polish',
      13: 'French',
      14: 'German',
      15: 'Italian',
      16: 'Portuguese',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_spoke_lang_other',
    label: 'spoke_lang_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_prim_lang',
    label: 'prim_lang',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'English',
      2: 'Spanish',
      3: 'Cantonese',
      4: 'Mandarin',
      5: 'Japanese',
      6: 'Korean',
      7: 'Vietnamese',
      17: 'Filipino/Tagalog',
      18: 'Thai',
      8: 'Farsi',
      9: 'Russian',
      10: 'Somali',
      11: 'Arabic',
      12: 'Polish',
      13: 'French',
      14: 'German',
      15: 'Italian',
      16: 'Portuguese',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_prim_lang_other',
    label: 'prim_lang_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mom_alive',
    label: 'mom_alive',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      2: 'No',
      3: 'I don\'t know'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mom_age',
    label: 'mom_age',
    type: 'integer',
    operators: ['equal', 'not_equal', 'greater', 'less'],
    validation: {
      min: 0
    }
  },
  {
    id: 'cur_mom_medhx',
    label: 'mom_medhx',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Heart disease',
      2: 'Cancer',
      3: 'Chronic obstructive pulmonary disease (COPD)',
      4: 'Stroke',
      5: 'Alzheimer\'s disease',
      6: 'Diabetes',
      7: 'Kidney disease',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mom_medhx_other',
    label: 'mom_medhx_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mom_death',
    label: 'mom_death',
    type: 'integer',
    operators: ['equal', 'not_equal'],
    validation: {
      min: 0
    }
  },
  {
    id: 'cur_mom_death_cause',
    label: 'mom_death_cause',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Heart disease',
      2: 'Cancer',
      3: 'Chronic obstructive pulmonary disease (COPD)',
      4: 'Stroke',
      5: 'Alzheimer\'s disease',
      6: 'Diabetes',
      7: 'Influenza or Pneumonia',
      8: 'Kidney disease',
      9: 'Suicide',
      10: 'Natural causes',
      88: 'Other',
      99: 'I don\'t know'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mom_death_cause_other',
    label: 'mom_death_cause_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dad_alive',
    label: 'dad_alive',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      2: 'No',
      3: 'I don\'t know'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dad_age',
    label: 'dad_age',
    type: 'integer',
    operators: ['equal', 'not_equal', 'greater', 'less'],
    validation: {
      min: 0
    }
  },
  {
    id: 'cur_dad_medhx',
    label: 'dad_medhx',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Heart disease',
      2: 'Cancer',
      3: 'Chronic obstructive pulmonary disease (COPD)',
      4: 'Stroke',
      5: 'Alzheimer\'s disease',
      6: 'Diabetes',
      7: 'Kidney disease',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dad_medhx_other',
    label: 'dad_medhx_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dad_death_age',
    label: 'dad_death_age',
    type: 'integer',
    operators: ['equal', 'not_equal', 'greater', 'less'],
    validation: {
      min: 0
    }
  },
  {
    id: 'cur_dad_death_cause',
    label: 'dad_death_cause',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Heart disease',
      2: 'Cancer',
      3: 'Chronic obstructive pulmonary disease (COPD)',
      4: 'Stroke',
      5: 'Alzheimer\'s disease',
      6: 'Diabetes',
      7: 'Influenza or Pneumonia',
      8: 'Kidney disease',
      9: 'Suicide',
      10: 'Natural causes',
      88: 'Other',
      99: 'I don\'t know'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_dad_death_cause_other',
    label: 'dad_death_cause_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_medical_condition',
    label: 'medical_condition',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Liver disease',
      2: 'Kidney disease',
      3: 'Congestive heart failure',
      4: 'Coronary artery disease',
      5: 'Diabetes',
      6: 'Hypertension (high blood pressure)',
      7: 'Hypercholesterolemia (high cholesterol)',
      8: 'Emphysema',
      9: 'Sleep apnea',
      10: 'REM sleep behavior disorder',
      11: 'Blindness',
      12: 'Deafness'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_pacemaker',
    label: 'pacemaker',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_metal_in_body',
    label: 'metal_in_body',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_claustrophobic',
    label: 'claustrophobic',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_cancer_dx',
    label: 'cancer_dx',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_cancer_type',
    label: 'cancer_type',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Skin (basal cell or squamous cell)',
      88: 'Other type of cancer'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_cancer_type_other',
    label: 'cancer_type_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_cancer_dx_date',
    label: 'cancer_dx_date',
    type: 'integer',
    operators: ['equal', 'not_equal', 'greater', 'less'],
    validation: {
      min: 1901
    }
  },
  {
    id: 'cur_cancer_treat',
    label: 'cancer_treat',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_cancer_treat_type',
    label: 'cancer_treat_type',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Radiation',
      2: 'Chemotherapy',
      3: 'Surgery',
      88: 'Other'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_cancer_treat_type_other',
    label: 'cancer_treat_type_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_cancer_treat_recent_year',
    label: 'cancer_treat_recent_year',
    type: 'integer',
    operators: ['equal', 'not_equal'],
    validation: {
      min: 1901
    }
  },
  {
    id: 'cur_neuro_dx',
    label: 'neuro_dx',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_neuro_dx_type',
    label: 'neuro_dx_type',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Alzheimer\'s Disease',
      2: 'Amyotrophic Lateral Sclerosis',
      3: 'Mild Cognitive Impairment',
      4: 'Frontotemporal Lobar Degeneration',
      5: 'Dementia with Lewy Bodies',
      6: 'Parkinson\'s Disease',
      7: 'Multiple Sclerosis',
      8: 'Normal Pressure Hydrocephalus',
      9: 'Seizure Disorder',
      10: 'Traumatic Brain Injury',
      11: 'Stroke',
      12: 'Transient Ischemic Attack',
      88: 'Other Neurological Disorder',
      77: 'None Of The Above'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_neuro_dx_other',
    label: 'neuro_dx_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_head_trauma',
    label: 'head_trauma',
    type: 'integer',
    input: 'radio',
    values: {
      1: 'Yes',
      0: 'No'
    },
    operators: ['equal']
  },
  {
    id: 'cur_psychiatric_history',
    label: 'psychiatric_history',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_num_meds',
    label: 'num_meds',
    type: 'integer',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_meds_other',
    label: 'meds_other',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_ex_walk',
    label: 'ex_walk',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_hike',
    label: 'ex_hike',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_bike',
    label: 'ex_bike',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_aerob',
    label: 'ex_aerob',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_swim',
    label: 'ex_swim',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_water',
    label: 'ex_water',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_weight',
    label: 'ex_weight',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_ex_other',
    label: 'ex_other',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_meat',
    label: 'eat_meat',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_fish',
    label: 'eat_fish',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_eggs',
    label: 'eat_eggs',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_dairy',
    label: 'eat_dairy',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_cereal',
    label: 'eat_cereal',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_raw_fruit',
    label: 'eat_raw_fruit',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_raw_veg',
    label: 'eat_raw_veg',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_cooked_fruit_veg',
    label: 'eat_cooked_fruit_veg',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_eat_pules',
    label: 'eat_pules',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Never',
      2: 'Less than once a week',
      3: 'Once a week',
      4: 'Two to three times a week',
      5: 'Four to six times a week',
      6: 'Daily'
    },
    operators: ['equal', 'not_equal', 'greater', 'less']
  },
  {
    id: 'cur_mem_decline',
    label: 'mem_decline',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_repeat',
    label: 'mem_repeat',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_misplace',
    label: 'mem_misplace',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_written_reminders',
    label: 'mem_written_reminders',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_help_appointments',
    label: 'mem_help_appointments',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_recall_words',
    label: 'mem_recall_words',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_driving',
    label: 'mem_driving',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_money',
    label: 'mem_money',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_social',
    label: 'mem_social',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_work',
    label: 'mem_work',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_news',
    label: 'mem_news',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_activities',
    label: 'mem_activities',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_lost_easily',
    label: 'mem_lost_easily',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_mem_household_appliances',
    label: 'mem_household_appliances',
    type: 'integer',
    input: 'select',
    default_value: 1,
    values: {
      1: 'Yes',
      0: 'No',
      9: 'Maybe'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_positive_view',
    label: 'raq_positive_view',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_be_trusted',
    label: 'raq_be_trusted',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_help_others',
    label: 'raq_help_others',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_need_to_devote',
    label: 'raq_need_to_devote',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_generally_safe',
    label: 'raq_generally_safe',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_kept_private',
    label: 'raq_kept_private',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_raq_find_cure',
    label: 'raq_find_cure',
    type: 'integer',
    input: 'select',
    default_value: 5,
    values: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    operators: ['equal', 'not_equal']
  },
  {
    id: 'cur_tm_end',
    label: 'tm_end',
    type: 'string',
    operators: ['equal', 'not_equal']
  },
  {
    id: 'current_complete',
    label: 'current_complete',
    type: 'integer',
    input: 'select',
    default_value: 2,
    values: {
      0: 'Incomplete',
      1: 'Unverified',
      2: 'Complete'
    },
    operators: ['equal']
  }],
  	allow_groups: false
});


$('#builder').on('validationError.queryBuilder', function(e, rule, error, value) {
	// never display error for my custom filter
	console.log("YOU HAVE AN ERROR in queryBuilder");
	//e.preventDefault();
});