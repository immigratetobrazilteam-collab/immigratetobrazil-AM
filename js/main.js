
// Master JS for State: AM - Persona: Rainforest Guardian
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 700;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const am_index_form_immigrate_to_amazonas = document.getElementById('am-index-form-immigrate-to-amazonas');
  if (am_index_form_immigrate_to_amazonas) {
    gsap.from('#am-index-form-immigrate-to-amazonas input, #am-index-form-immigrate-to-amazonas textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_index_list__immigration_assistance_for_wildlife_enthusiasts_in_amazonas_ = document.getElementById('am-index-list--immigration-assistance-for-wildlife-enthusiasts-in-amazonas-');
  if (am_index_list__immigration_assistance_for_wildlife_enthusiasts_in_amazonas_) {
    gsap.from('#am-index-list--immigration-assistance-for-wildlife-enthusiasts-in-amazonas- li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_index_list_immigration_legal_services_in_brazil = document.getElementById('am-index-list-immigration-legal-services-in-brazil');
  if (am_index_list_immigration_legal_services_in_brazil) {
    gsap.from('#am-index-list-immigration-legal-services-in-brazil li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_index_section_why_amazonas = document.getElementById('am-index-section-why-amazonas');
  if (am_index_section_why_amazonas) {
    gsap.fromTo('#am-index-section-why-amazonas', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_index_list_how_the_process_works = document.getElementById('am-index-list-how-the-process-works');
  if (am_index_list_how_the_process_works) {
    gsap.from('#am-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_index_section__frequently_asked_questions_about_living_in_amazonas_ = document.getElementById('am-index-section--frequently-asked-questions-about-living-in-amazonas-');
  if (am_index_section__frequently_asked_questions_about_living_in_amazonas_) {
    gsap.fromTo('#am-index-section--frequently-asked-questions-about-living-in-amazonas-', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('am-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (am_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#am-renouncingcitizenship-form-renounce-brazilian-citizenship input, #am-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_quick_facts = document.getElementById('am-renouncingcitizenship-list-quick-facts');
  if (am_renouncingcitizenship_list_quick_facts) {
    gsap.from('#am-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('am-renouncingcitizenship-list-common-challenges-applicants-face');
  if (am_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#am-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('am-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (am_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#am-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_renunciation_overview = document.getElementById('am-renouncingcitizenship-section-renunciation-overview');
  if (am_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#am-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_form_who_is_this_for = document.getElementById('am-renouncingcitizenship-form-who-is-this-for');
  if (am_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#am-renouncingcitizenship-form-who-is-this-for input, #am-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_required_documents = document.getElementById('am-renouncingcitizenship-list-required-documents');
  if (am_renouncingcitizenship_list_required_documents) {
    gsap.from('#am-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_process = document.getElementById('am-renouncingcitizenship-list-process');
  if (am_renouncingcitizenship_list_process) {
    gsap.from('#am-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_timelines_deadlines = document.getElementById('am-renouncingcitizenship-section-timelines-deadlines');
  if (am_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#am-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_fees_costs = document.getElementById('am-renouncingcitizenship-section-fees-costs');
  if (am_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#am-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('am-renouncingcitizenship-list-risks-common-mistakes');
  if (am_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#am-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('am-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (am_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_amazonas_specific_context = document.getElementById('am-renouncingcitizenship-section-amazonas-specific-context');
  if (am_renouncingcitizenship_section_amazonas_specific_context) {
    gsap.fromTo('#am-renouncingcitizenship-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_what_our_clients_say = document.getElementById('am-renouncingcitizenship-section-what-our-clients-say');
  if (am_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#am-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('am-renouncingcitizenship-section-frequently-asked-questions');
  if (am_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#am-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_international_support = document.getElementById('am-renouncingcitizenship-section-international-support');
  if (am_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#am-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_our_credentials = document.getElementById('am-renouncingcitizenship-list-our-credentials');
  if (am_renouncingcitizenship_list_our_credentials) {
    gsap.from('#am-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_list_related_services = document.getElementById('am-renouncingcitizenship-list-related-services');
  if (am_renouncingcitizenship_list_related_services) {
    gsap.from('#am-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('am-renouncingcitizenship-section-youre-in-good-hands');
  if (am_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#am-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_renouncingcitizenship_section_21 = document.getElementById('am-renouncingcitizenship-section-21');
  if (am_renouncingcitizenship_section_21) {
    gsap.fromTo('#am-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('am-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (am_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#am-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #am-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_quick_facts = document.getElementById('am-provisional-list-quick-facts');
  if (am_provisional_list_quick_facts) {
    gsap.from('#am-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_common_challenges_applicants_face = document.getElementById('am-provisional-list-common-challenges-applicants-face');
  if (am_provisional_list_common_challenges_applicants_face) {
    gsap.from('#am-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_how_we_solve_these_challenges = document.getElementById('am-provisional-list-how-we-solve-these-challenges');
  if (am_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#am-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_naturalisation_overview = document.getElementById('am-provisional-section-naturalisation-overview');
  if (am_provisional_section_naturalisation_overview) {
    gsap.fromTo('#am-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_form_who_is_this_naturalisation_for = document.getElementById('am-provisional-form-who-is-this-naturalisation-for');
  if (am_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#am-provisional-form-who-is-this-naturalisation-for input, #am-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_required_documents = document.getElementById('am-provisional-list-required-documents');
  if (am_provisional_list_required_documents) {
    gsap.from('#am-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_application_process = document.getElementById('am-provisional-list-application-process');
  if (am_provisional_list_application_process) {
    gsap.from('#am-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_timelines_deadlines = document.getElementById('am-provisional-section-timelines-deadlines');
  if (am_provisional_section_timelines_deadlines) {
    gsap.fromTo('#am-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_fees_costs = document.getElementById('am-provisional-section-fees-costs');
  if (am_provisional_section_fees_costs) {
    gsap.fromTo('#am-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_risks_common_mistakes = document.getElementById('am-provisional-list-risks-common-mistakes');
  if (am_provisional_list_risks_common_mistakes) {
    gsap.from('#am-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_diy_vs_professional_assistance = document.getElementById('am-provisional-section-diy-vs-professional-assistance');
  if (am_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_amazonas_specific_context = document.getElementById('am-provisional-section-amazonas-specific-context');
  if (am_provisional_section_amazonas_specific_context) {
    gsap.fromTo('#am-provisional-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_what_our_clients_say = document.getElementById('am-provisional-section-what-our-clients-say');
  if (am_provisional_section_what_our_clients_say) {
    gsap.fromTo('#am-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_frequently_asked_questions = document.getElementById('am-provisional-section-frequently-asked-questions');
  if (am_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#am-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_international_support = document.getElementById('am-provisional-section-international-support');
  if (am_provisional_section_international_support) {
    gsap.fromTo('#am-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_our_credentials = document.getElementById('am-provisional-list-our-credentials');
  if (am_provisional_list_our_credentials) {
    gsap.from('#am-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_list_related_services = document.getElementById('am-provisional-list-related-services');
  if (am_provisional_list_related_services) {
    gsap.from('#am-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_youre_in_good_hands = document.getElementById('am-provisional-section-youre-in-good-hands');
  if (am_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#am-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_provisional_section_21 = document.getElementById('am-provisional-section-21');
  if (am_provisional_section_21) {
    gsap.fromTo('#am-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('am-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (am_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#am-special-form-special-naturalisation-in-brazil-for-particular-cases input, #am-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_quick_facts = document.getElementById('am-special-list-quick-facts');
  if (am_special_list_quick_facts) {
    gsap.from('#am-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_common_challenges_applicants_face = document.getElementById('am-special-list-common-challenges-applicants-face');
  if (am_special_list_common_challenges_applicants_face) {
    gsap.from('#am-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_how_we_solve_these_challenges = document.getElementById('am-special-list-how-we-solve-these-challenges');
  if (am_special_list_how_we_solve_these_challenges) {
    gsap.from('#am-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_naturalisation_overview = document.getElementById('am-special-section-naturalisation-overview');
  if (am_special_section_naturalisation_overview) {
    gsap.fromTo('#am-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_form_who_is_this_naturalisation_for = document.getElementById('am-special-form-who-is-this-naturalisation-for');
  if (am_special_form_who_is_this_naturalisation_for) {
    gsap.from('#am-special-form-who-is-this-naturalisation-for input, #am-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_required_documents = document.getElementById('am-special-list-required-documents');
  if (am_special_list_required_documents) {
    gsap.from('#am-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_application_process = document.getElementById('am-special-list-application-process');
  if (am_special_list_application_process) {
    gsap.from('#am-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_timelines_deadlines = document.getElementById('am-special-section-timelines-deadlines');
  if (am_special_section_timelines_deadlines) {
    gsap.fromTo('#am-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_fees_costs = document.getElementById('am-special-section-fees-costs');
  if (am_special_section_fees_costs) {
    gsap.fromTo('#am-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_risks_common_mistakes = document.getElementById('am-special-list-risks-common-mistakes');
  if (am_special_list_risks_common_mistakes) {
    gsap.from('#am-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_diy_vs_professional_assistance = document.getElementById('am-special-section-diy-vs-professional-assistance');
  if (am_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_amazonas_specific_context = document.getElementById('am-special-section-amazonas-specific-context');
  if (am_special_section_amazonas_specific_context) {
    gsap.fromTo('#am-special-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_what_our_clients_say = document.getElementById('am-special-section-what-our-clients-say');
  if (am_special_section_what_our_clients_say) {
    gsap.fromTo('#am-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_frequently_asked_questions = document.getElementById('am-special-section-frequently-asked-questions');
  if (am_special_section_frequently_asked_questions) {
    gsap.fromTo('#am-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_international_support = document.getElementById('am-special-section-international-support');
  if (am_special_section_international_support) {
    gsap.fromTo('#am-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_our_credentials = document.getElementById('am-special-list-our-credentials');
  if (am_special_list_our_credentials) {
    gsap.from('#am-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_list_related_services = document.getElementById('am-special-list-related-services');
  if (am_special_list_related_services) {
    gsap.from('#am-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_youre_in_good_hands = document.getElementById('am-special-section-youre-in-good-hands');
  if (am_special_section_youre_in_good_hands) {
    gsap.fromTo('#am-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_special_section_21 = document.getElementById('am-special-section-21');
  if (am_special_section_21) {
    gsap.fromTo('#am-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('am-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (am_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#am-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #am-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_quick_facts = document.getElementById('am-ordinary-list-quick-facts');
  if (am_ordinary_list_quick_facts) {
    gsap.from('#am-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_common_challenges_applicants_face = document.getElementById('am-ordinary-list-common-challenges-applicants-face');
  if (am_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#am-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_how_we_solve_these_challenges = document.getElementById('am-ordinary-list-how-we-solve-these-challenges');
  if (am_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#am-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_naturalisation_overview = document.getElementById('am-ordinary-section-naturalisation-overview');
  if (am_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#am-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_form_who_is_this_naturalisation_for = document.getElementById('am-ordinary-form-who-is-this-naturalisation-for');
  if (am_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#am-ordinary-form-who-is-this-naturalisation-for input, #am-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_required_documents = document.getElementById('am-ordinary-list-required-documents');
  if (am_ordinary_list_required_documents) {
    gsap.from('#am-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_application_process = document.getElementById('am-ordinary-list-application-process');
  if (am_ordinary_list_application_process) {
    gsap.from('#am-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_timelines_deadlines = document.getElementById('am-ordinary-section-timelines-deadlines');
  if (am_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#am-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_fees_costs = document.getElementById('am-ordinary-section-fees-costs');
  if (am_ordinary_section_fees_costs) {
    gsap.fromTo('#am-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_risks_common_mistakes = document.getElementById('am-ordinary-list-risks-common-mistakes');
  if (am_ordinary_list_risks_common_mistakes) {
    gsap.from('#am-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_diy_vs_professional_assistance = document.getElementById('am-ordinary-section-diy-vs-professional-assistance');
  if (am_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_amazonas_specific_context = document.getElementById('am-ordinary-section-amazonas-specific-context');
  if (am_ordinary_section_amazonas_specific_context) {
    gsap.fromTo('#am-ordinary-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_what_our_clients_say = document.getElementById('am-ordinary-section-what-our-clients-say');
  if (am_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#am-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_frequently_asked_questions = document.getElementById('am-ordinary-section-frequently-asked-questions');
  if (am_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#am-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_international_support = document.getElementById('am-ordinary-section-international-support');
  if (am_ordinary_section_international_support) {
    gsap.fromTo('#am-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_our_credentials = document.getElementById('am-ordinary-list-our-credentials');
  if (am_ordinary_list_our_credentials) {
    gsap.from('#am-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_list_related_services = document.getElementById('am-ordinary-list-related-services');
  if (am_ordinary_list_related_services) {
    gsap.from('#am-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_youre_in_good_hands = document.getElementById('am-ordinary-section-youre-in-good-hands');
  if (am_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#am-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_ordinary_section_21 = document.getElementById('am-ordinary-section-21');
  if (am_ordinary_section_21) {
    gsap.fromTo('#am-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('am-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (am_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#am-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #am-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_quick_facts = document.getElementById('am-extraordinary-list-quick-facts');
  if (am_extraordinary_list_quick_facts) {
    gsap.from('#am-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_common_challenges_applicants_face = document.getElementById('am-extraordinary-list-common-challenges-applicants-face');
  if (am_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#am-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_how_we_solve_these_challenges = document.getElementById('am-extraordinary-list-how-we-solve-these-challenges');
  if (am_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#am-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_naturalisation_overview = document.getElementById('am-extraordinary-section-naturalisation-overview');
  if (am_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#am-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('am-extraordinary-form-who-is-this-naturalisation-for');
  if (am_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#am-extraordinary-form-who-is-this-naturalisation-for input, #am-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_required_documents = document.getElementById('am-extraordinary-list-required-documents');
  if (am_extraordinary_list_required_documents) {
    gsap.from('#am-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_application_process = document.getElementById('am-extraordinary-list-application-process');
  if (am_extraordinary_list_application_process) {
    gsap.from('#am-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_timelines_deadlines = document.getElementById('am-extraordinary-section-timelines-deadlines');
  if (am_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#am-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_fees_costs = document.getElementById('am-extraordinary-section-fees-costs');
  if (am_extraordinary_section_fees_costs) {
    gsap.fromTo('#am-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_risks_common_mistakes = document.getElementById('am-extraordinary-list-risks-common-mistakes');
  if (am_extraordinary_list_risks_common_mistakes) {
    gsap.from('#am-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_diy_vs_professional_assistance = document.getElementById('am-extraordinary-section-diy-vs-professional-assistance');
  if (am_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_amazonas_specific_context = document.getElementById('am-extraordinary-section-amazonas-specific-context');
  if (am_extraordinary_section_amazonas_specific_context) {
    gsap.fromTo('#am-extraordinary-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_what_our_clients_say = document.getElementById('am-extraordinary-section-what-our-clients-say');
  if (am_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#am-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_frequently_asked_questions = document.getElementById('am-extraordinary-section-frequently-asked-questions');
  if (am_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#am-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_international_support = document.getElementById('am-extraordinary-section-international-support');
  if (am_extraordinary_section_international_support) {
    gsap.fromTo('#am-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_our_credentials = document.getElementById('am-extraordinary-list-our-credentials');
  if (am_extraordinary_list_our_credentials) {
    gsap.from('#am-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_list_related_services = document.getElementById('am-extraordinary-list-related-services');
  if (am_extraordinary_list_related_services) {
    gsap.from('#am-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_youre_in_good_hands = document.getElementById('am-extraordinary-section-youre-in-good-hands');
  if (am_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#am-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extraordinary_section_21 = document.getElementById('am-extraordinary-section-21');
  if (am_extraordinary_section_21) {
    gsap.fromTo('#am-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('am-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (am_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#am-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #am-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_quick_facts = document.getElementById('am-reacquisitioncitizenship-list-quick-facts');
  if (am_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#am-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('am-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (am_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#am-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('am-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (am_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#am-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('am-reacquisitioncitizenship-section-reacquisition-overview');
  if (am_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('am-reacquisitioncitizenship-form-who-is-this-for');
  if (am_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#am-reacquisitioncitizenship-form-who-is-this-for input, #am-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_required_documents = document.getElementById('am-reacquisitioncitizenship-list-required-documents');
  if (am_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#am-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_process = document.getElementById('am-reacquisitioncitizenship-list-process');
  if (am_reacquisitioncitizenship_list_process) {
    gsap.from('#am-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('am-reacquisitioncitizenship-section-timelines-deadlines');
  if (am_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_fees_costs = document.getElementById('am-reacquisitioncitizenship-section-fees-costs');
  if (am_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('am-reacquisitioncitizenship-list-risks-common-mistakes');
  if (am_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#am-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('am-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (am_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_amazonas_specific_context = document.getElementById('am-reacquisitioncitizenship-section-amazonas-specific-context');
  if (am_reacquisitioncitizenship_section_amazonas_specific_context) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('am-reacquisitioncitizenship-section-what-our-clients-say');
  if (am_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('am-reacquisitioncitizenship-section-frequently-asked-questions');
  if (am_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_international_support = document.getElementById('am-reacquisitioncitizenship-section-international-support');
  if (am_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_our_credentials = document.getElementById('am-reacquisitioncitizenship-list-our-credentials');
  if (am_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#am-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_list_related_services = document.getElementById('am-reacquisitioncitizenship-list-related-services');
  if (am_reacquisitioncitizenship_list_related_services) {
    gsap.from('#am-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('am-reacquisitioncitizenship-section-youre-in-good-hands');
  if (am_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_reacquisitioncitizenship_section_21 = document.getElementById('am-reacquisitioncitizenship-section-21');
  if (am_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#am-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('am-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (am_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#am-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #am-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_quick_facts = document.getElementById('am-scientificresearch-list-quick-facts');
  if (am_scientificresearch_list_quick_facts) {
    gsap.from('#am-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_common_challenges_applicants_face = document.getElementById('am-scientificresearch-list-common-challenges-applicants-face');
  if (am_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#am-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('am-scientificresearch-list-how-we-solve-these-challenges');
  if (am_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#am-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_residency_overview = document.getElementById('am-scientificresearch-section-residency-overview');
  if (am_scientificresearch_section_residency_overview) {
    gsap.fromTo('#am-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_form_who_is_this_residency_for = document.getElementById('am-scientificresearch-form-who-is-this-residency-for');
  if (am_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#am-scientificresearch-form-who-is-this-residency-for input, #am-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_required_documents = document.getElementById('am-scientificresearch-list-required-documents');
  if (am_scientificresearch_list_required_documents) {
    gsap.from('#am-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_application_process = document.getElementById('am-scientificresearch-list-application-process');
  if (am_scientificresearch_list_application_process) {
    gsap.from('#am-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_timelines_deadlines = document.getElementById('am-scientificresearch-section-timelines-deadlines');
  if (am_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#am-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_fees_costs = document.getElementById('am-scientificresearch-section-fees-costs');
  if (am_scientificresearch_section_fees_costs) {
    gsap.fromTo('#am-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_risks_common_mistakes = document.getElementById('am-scientificresearch-list-risks-common-mistakes');
  if (am_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#am-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('am-scientificresearch-section-diy-vs-professional-assistance');
  if (am_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_amazonas_specific_context = document.getElementById('am-scientificresearch-section-amazonas-specific-context');
  if (am_scientificresearch_section_amazonas_specific_context) {
    gsap.fromTo('#am-scientificresearch-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_what_our_clients_say = document.getElementById('am-scientificresearch-section-what-our-clients-say');
  if (am_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#am-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_frequently_asked_questions = document.getElementById('am-scientificresearch-section-frequently-asked-questions');
  if (am_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#am-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_international_support = document.getElementById('am-scientificresearch-section-international-support');
  if (am_scientificresearch_section_international_support) {
    gsap.fromTo('#am-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_our_credentials = document.getElementById('am-scientificresearch-list-our-credentials');
  if (am_scientificresearch_list_our_credentials) {
    gsap.from('#am-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_list_related_services = document.getElementById('am-scientificresearch-list-related-services');
  if (am_scientificresearch_list_related_services) {
    gsap.from('#am-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_youre_in_good_hands = document.getElementById('am-scientificresearch-section-youre-in-good-hands');
  if (am_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#am-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_scientificresearch_section_21 = document.getElementById('am-scientificresearch-section-21');
  if (am_scientificresearch_section_21) {
    gsap.fromTo('#am-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_form_study_in_brazil_with_study_residency = document.getElementById('am-study-form-study-in-brazil-with-study-residency');
  if (am_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#am-study-form-study-in-brazil-with-study-residency input, #am-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_quick_facts = document.getElementById('am-study-list-quick-facts');
  if (am_study_list_quick_facts) {
    gsap.from('#am-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_common_challenges_applicants_face = document.getElementById('am-study-list-common-challenges-applicants-face');
  if (am_study_list_common_challenges_applicants_face) {
    gsap.from('#am-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_how_we_solve_these_challenges = document.getElementById('am-study-list-how-we-solve-these-challenges');
  if (am_study_list_how_we_solve_these_challenges) {
    gsap.from('#am-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_residency_overview = document.getElementById('am-study-section-residency-overview');
  if (am_study_section_residency_overview) {
    gsap.fromTo('#am-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_form_who_is_this_residency_for = document.getElementById('am-study-form-who-is-this-residency-for');
  if (am_study_form_who_is_this_residency_for) {
    gsap.from('#am-study-form-who-is-this-residency-for input, #am-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_required_documents = document.getElementById('am-study-list-required-documents');
  if (am_study_list_required_documents) {
    gsap.from('#am-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_application_process = document.getElementById('am-study-list-application-process');
  if (am_study_list_application_process) {
    gsap.from('#am-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_timelines_deadlines = document.getElementById('am-study-section-timelines-deadlines');
  if (am_study_section_timelines_deadlines) {
    gsap.fromTo('#am-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_fees_costs = document.getElementById('am-study-section-fees-costs');
  if (am_study_section_fees_costs) {
    gsap.fromTo('#am-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_risks_common_mistakes = document.getElementById('am-study-list-risks-common-mistakes');
  if (am_study_list_risks_common_mistakes) {
    gsap.from('#am-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_diy_vs_professional_assistance = document.getElementById('am-study-section-diy-vs-professional-assistance');
  if (am_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_amazonas_specific_context = document.getElementById('am-study-section-amazonas-specific-context');
  if (am_study_section_amazonas_specific_context) {
    gsap.fromTo('#am-study-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_what_our_clients_say = document.getElementById('am-study-section-what-our-clients-say');
  if (am_study_section_what_our_clients_say) {
    gsap.fromTo('#am-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_frequently_asked_questions = document.getElementById('am-study-section-frequently-asked-questions');
  if (am_study_section_frequently_asked_questions) {
    gsap.fromTo('#am-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_international_support = document.getElementById('am-study-section-international-support');
  if (am_study_section_international_support) {
    gsap.fromTo('#am-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_our_credentials = document.getElementById('am-study-list-our-credentials');
  if (am_study_list_our_credentials) {
    gsap.from('#am-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_list_related_services = document.getElementById('am-study-list-related-services');
  if (am_study_list_related_services) {
    gsap.from('#am-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_youre_in_good_hands = document.getElementById('am-study-section-youre-in-good-hands');
  if (am_study_section_youre_in_good_hands) {
    gsap.fromTo('#am-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_study_section_21 = document.getElementById('am-study-section-21');
  if (am_study_section_21) {
    gsap.fromTo('#am-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('am-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (am_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#am-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #am-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_quick_facts = document.getElementById('am-educationalexchange-list-quick-facts');
  if (am_educationalexchange_list_quick_facts) {
    gsap.from('#am-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_common_challenges_applicants_face = document.getElementById('am-educationalexchange-list-common-challenges-applicants-face');
  if (am_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#am-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('am-educationalexchange-list-how-we-solve-these-challenges');
  if (am_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#am-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_residency_overview = document.getElementById('am-educationalexchange-section-residency-overview');
  if (am_educationalexchange_section_residency_overview) {
    gsap.fromTo('#am-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_form_who_is_this_residency_for = document.getElementById('am-educationalexchange-form-who-is-this-residency-for');
  if (am_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#am-educationalexchange-form-who-is-this-residency-for input, #am-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_required_documents = document.getElementById('am-educationalexchange-list-required-documents');
  if (am_educationalexchange_list_required_documents) {
    gsap.from('#am-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_application_process = document.getElementById('am-educationalexchange-list-application-process');
  if (am_educationalexchange_list_application_process) {
    gsap.from('#am-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_timelines_deadlines = document.getElementById('am-educationalexchange-section-timelines-deadlines');
  if (am_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#am-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_fees_costs = document.getElementById('am-educationalexchange-section-fees-costs');
  if (am_educationalexchange_section_fees_costs) {
    gsap.fromTo('#am-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_risks_common_mistakes = document.getElementById('am-educationalexchange-list-risks-common-mistakes');
  if (am_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#am-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('am-educationalexchange-section-diy-vs-professional-assistance');
  if (am_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_amazonas_specific_context = document.getElementById('am-educationalexchange-section-amazonas-specific-context');
  if (am_educationalexchange_section_amazonas_specific_context) {
    gsap.fromTo('#am-educationalexchange-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_what_our_clients_say = document.getElementById('am-educationalexchange-section-what-our-clients-say');
  if (am_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#am-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_frequently_asked_questions = document.getElementById('am-educationalexchange-section-frequently-asked-questions');
  if (am_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#am-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_international_support = document.getElementById('am-educationalexchange-section-international-support');
  if (am_educationalexchange_section_international_support) {
    gsap.fromTo('#am-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_our_credentials = document.getElementById('am-educationalexchange-list-our-credentials');
  if (am_educationalexchange_list_our_credentials) {
    gsap.from('#am-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_list_related_services = document.getElementById('am-educationalexchange-list-related-services');
  if (am_educationalexchange_list_related_services) {
    gsap.from('#am-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_youre_in_good_hands = document.getElementById('am-educationalexchange-section-youre-in-good-hands');
  if (am_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#am-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_educationalexchange_section_21 = document.getElementById('am-educationalexchange-section-21');
  if (am_educationalexchange_section_21) {
    gsap.fromTo('#am-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('am-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (am_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#am-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #am-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_quick_facts = document.getElementById('am-humanitarian-list-quick-facts');
  if (am_humanitarian_list_quick_facts) {
    gsap.from('#am-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_common_challenges_applicants_face = document.getElementById('am-humanitarian-list-common-challenges-applicants-face');
  if (am_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#am-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_how_we_solve_these_challenges = document.getElementById('am-humanitarian-list-how-we-solve-these-challenges');
  if (am_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#am-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_residency_overview = document.getElementById('am-humanitarian-section-residency-overview');
  if (am_humanitarian_section_residency_overview) {
    gsap.fromTo('#am-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_form_who_is_this_residency_for = document.getElementById('am-humanitarian-form-who-is-this-residency-for');
  if (am_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#am-humanitarian-form-who-is-this-residency-for input, #am-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_required_documents = document.getElementById('am-humanitarian-list-required-documents');
  if (am_humanitarian_list_required_documents) {
    gsap.from('#am-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_application_process = document.getElementById('am-humanitarian-list-application-process');
  if (am_humanitarian_list_application_process) {
    gsap.from('#am-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_timelines_deadlines = document.getElementById('am-humanitarian-section-timelines-deadlines');
  if (am_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#am-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_fees_costs = document.getElementById('am-humanitarian-section-fees-costs');
  if (am_humanitarian_section_fees_costs) {
    gsap.fromTo('#am-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_risks_common_mistakes = document.getElementById('am-humanitarian-list-risks-common-mistakes');
  if (am_humanitarian_list_risks_common_mistakes) {
    gsap.from('#am-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_diy_vs_professional_assistance = document.getElementById('am-humanitarian-section-diy-vs-professional-assistance');
  if (am_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_amazonas_specific_context = document.getElementById('am-humanitarian-section-amazonas-specific-context');
  if (am_humanitarian_section_amazonas_specific_context) {
    gsap.fromTo('#am-humanitarian-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_what_our_clients_say = document.getElementById('am-humanitarian-section-what-our-clients-say');
  if (am_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#am-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_frequently_asked_questions = document.getElementById('am-humanitarian-section-frequently-asked-questions');
  if (am_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#am-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_international_support = document.getElementById('am-humanitarian-section-international-support');
  if (am_humanitarian_section_international_support) {
    gsap.fromTo('#am-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_our_credentials = document.getElementById('am-humanitarian-list-our-credentials');
  if (am_humanitarian_list_our_credentials) {
    gsap.from('#am-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_list_related_services = document.getElementById('am-humanitarian-list-related-services');
  if (am_humanitarian_list_related_services) {
    gsap.from('#am-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_youre_in_good_hands = document.getElementById('am-humanitarian-section-youre-in-good-hands');
  if (am_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#am-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_humanitarian_section_21 = document.getElementById('am-humanitarian-section-21');
  if (am_humanitarian_section_21) {
    gsap.fromTo('#am-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('am-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (am_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#am-digitalnomad-form-digital-nomad-residency-in-brazil input, #am-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_quick_facts = document.getElementById('am-digitalnomad-list-quick-facts');
  if (am_digitalnomad_list_quick_facts) {
    gsap.from('#am-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_common_challenges_applicants_face = document.getElementById('am-digitalnomad-list-common-challenges-applicants-face');
  if (am_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#am-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('am-digitalnomad-list-how-we-solve-these-challenges');
  if (am_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#am-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_residency_overview = document.getElementById('am-digitalnomad-section-residency-overview');
  if (am_digitalnomad_section_residency_overview) {
    gsap.fromTo('#am-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_form_who_is_this_residency_for = document.getElementById('am-digitalnomad-form-who-is-this-residency-for');
  if (am_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#am-digitalnomad-form-who-is-this-residency-for input, #am-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_required_documents = document.getElementById('am-digitalnomad-list-required-documents');
  if (am_digitalnomad_list_required_documents) {
    gsap.from('#am-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_application_process = document.getElementById('am-digitalnomad-list-application-process');
  if (am_digitalnomad_list_application_process) {
    gsap.from('#am-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_timelines_deadlines = document.getElementById('am-digitalnomad-section-timelines-deadlines');
  if (am_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#am-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_fees_costs = document.getElementById('am-digitalnomad-section-fees-costs');
  if (am_digitalnomad_section_fees_costs) {
    gsap.fromTo('#am-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_risks_common_mistakes = document.getElementById('am-digitalnomad-list-risks-common-mistakes');
  if (am_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#am-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('am-digitalnomad-section-diy-vs-professional-assistance');
  if (am_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_amazonas_specific_context = document.getElementById('am-digitalnomad-section-amazonas-specific-context');
  if (am_digitalnomad_section_amazonas_specific_context) {
    gsap.fromTo('#am-digitalnomad-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_what_our_clients_say = document.getElementById('am-digitalnomad-section-what-our-clients-say');
  if (am_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#am-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_frequently_asked_questions = document.getElementById('am-digitalnomad-section-frequently-asked-questions');
  if (am_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#am-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_international_support = document.getElementById('am-digitalnomad-section-international-support');
  if (am_digitalnomad_section_international_support) {
    gsap.fromTo('#am-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_our_credentials = document.getElementById('am-digitalnomad-list-our-credentials');
  if (am_digitalnomad_list_our_credentials) {
    gsap.from('#am-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_list_related_services = document.getElementById('am-digitalnomad-list-related-services');
  if (am_digitalnomad_list_related_services) {
    gsap.from('#am-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_youre_in_good_hands = document.getElementById('am-digitalnomad-section-youre-in-good-hands');
  if (am_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#am-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_digitalnomad_section_21 = document.getElementById('am-digitalnomad-section-21');
  if (am_digitalnomad_section_21) {
    gsap.fromTo('#am-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('am-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (am_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#am-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #am-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_quick_facts = document.getElementById('am-familyreunion-list-quick-facts');
  if (am_familyreunion_list_quick_facts) {
    gsap.from('#am-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_common_challenges_applicants_face = document.getElementById('am-familyreunion-list-common-challenges-applicants-face');
  if (am_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#am-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_how_we_solve_these_challenges = document.getElementById('am-familyreunion-list-how-we-solve-these-challenges');
  if (am_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#am-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_residency_overview = document.getElementById('am-familyreunion-section-residency-overview');
  if (am_familyreunion_section_residency_overview) {
    gsap.fromTo('#am-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_form_who_is_this_residency_for = document.getElementById('am-familyreunion-form-who-is-this-residency-for');
  if (am_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#am-familyreunion-form-who-is-this-residency-for input, #am-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_required_documents = document.getElementById('am-familyreunion-list-required-documents');
  if (am_familyreunion_list_required_documents) {
    gsap.from('#am-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_application_process = document.getElementById('am-familyreunion-list-application-process');
  if (am_familyreunion_list_application_process) {
    gsap.from('#am-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_timelines_deadlines = document.getElementById('am-familyreunion-section-timelines-deadlines');
  if (am_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#am-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_fees_costs = document.getElementById('am-familyreunion-section-fees-costs');
  if (am_familyreunion_section_fees_costs) {
    gsap.fromTo('#am-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_risks_common_mistakes = document.getElementById('am-familyreunion-list-risks-common-mistakes');
  if (am_familyreunion_list_risks_common_mistakes) {
    gsap.from('#am-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_diy_vs_professional_assistance = document.getElementById('am-familyreunion-section-diy-vs-professional-assistance');
  if (am_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_amazonas_specific_context = document.getElementById('am-familyreunion-section-amazonas-specific-context');
  if (am_familyreunion_section_amazonas_specific_context) {
    gsap.fromTo('#am-familyreunion-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_what_our_clients_say = document.getElementById('am-familyreunion-section-what-our-clients-say');
  if (am_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#am-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_frequently_asked_questions = document.getElementById('am-familyreunion-section-frequently-asked-questions');
  if (am_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#am-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_international_support = document.getElementById('am-familyreunion-section-international-support');
  if (am_familyreunion_section_international_support) {
    gsap.fromTo('#am-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_our_credentials = document.getElementById('am-familyreunion-list-our-credentials');
  if (am_familyreunion_list_our_credentials) {
    gsap.from('#am-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_list_related_services = document.getElementById('am-familyreunion-list-related-services');
  if (am_familyreunion_list_related_services) {
    gsap.from('#am-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_youre_in_good_hands = document.getElementById('am-familyreunion-section-youre-in-good-hands');
  if (am_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#am-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_familyreunion_section_21 = document.getElementById('am-familyreunion-section-21');
  if (am_familyreunion_section_21) {
    gsap.fromTo('#am-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('am-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (am_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#am-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #am-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_quick_facts = document.getElementById('am-mercosul-list-quick-facts');
  if (am_mercosul_list_quick_facts) {
    gsap.from('#am-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_common_challenges_applicants_face = document.getElementById('am-mercosul-list-common-challenges-applicants-face');
  if (am_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#am-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_how_we_solve_these_challenges = document.getElementById('am-mercosul-list-how-we-solve-these-challenges');
  if (am_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#am-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_residency_overview = document.getElementById('am-mercosul-section-residency-overview');
  if (am_mercosul_section_residency_overview) {
    gsap.fromTo('#am-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_form_who_is_this_residency_for = document.getElementById('am-mercosul-form-who-is-this-residency-for');
  if (am_mercosul_form_who_is_this_residency_for) {
    gsap.from('#am-mercosul-form-who-is-this-residency-for input, #am-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_required_documents = document.getElementById('am-mercosul-list-required-documents');
  if (am_mercosul_list_required_documents) {
    gsap.from('#am-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_application_process = document.getElementById('am-mercosul-list-application-process');
  if (am_mercosul_list_application_process) {
    gsap.from('#am-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_timelines_deadlines = document.getElementById('am-mercosul-section-timelines-deadlines');
  if (am_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#am-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_fees_costs = document.getElementById('am-mercosul-section-fees-costs');
  if (am_mercosul_section_fees_costs) {
    gsap.fromTo('#am-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_risks_common_mistakes = document.getElementById('am-mercosul-list-risks-common-mistakes');
  if (am_mercosul_list_risks_common_mistakes) {
    gsap.from('#am-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_diy_vs_professional_assistance = document.getElementById('am-mercosul-section-diy-vs-professional-assistance');
  if (am_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_amazonas_specific_context = document.getElementById('am-mercosul-section-amazonas-specific-context');
  if (am_mercosul_section_amazonas_specific_context) {
    gsap.fromTo('#am-mercosul-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_what_our_clients_say = document.getElementById('am-mercosul-section-what-our-clients-say');
  if (am_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#am-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_frequently_asked_questions = document.getElementById('am-mercosul-section-frequently-asked-questions');
  if (am_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#am-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_international_support = document.getElementById('am-mercosul-section-international-support');
  if (am_mercosul_section_international_support) {
    gsap.fromTo('#am-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_our_credentials = document.getElementById('am-mercosul-list-our-credentials');
  if (am_mercosul_list_our_credentials) {
    gsap.from('#am-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_list_related_services = document.getElementById('am-mercosul-list-related-services');
  if (am_mercosul_list_related_services) {
    gsap.from('#am-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_youre_in_good_hands = document.getElementById('am-mercosul-section-youre-in-good-hands');
  if (am_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#am-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_mercosul_section_21 = document.getElementById('am-mercosul-section-21');
  if (am_mercosul_section_21) {
    gsap.fromTo('#am-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('am-retiree-form-retire-in-brazil-with-retiree-residency');
  if (am_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#am-retiree-form-retire-in-brazil-with-retiree-residency input, #am-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_quick_facts = document.getElementById('am-retiree-list-quick-facts');
  if (am_retiree_list_quick_facts) {
    gsap.from('#am-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_common_challenges_applicants_face = document.getElementById('am-retiree-list-common-challenges-applicants-face');
  if (am_retiree_list_common_challenges_applicants_face) {
    gsap.from('#am-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_how_we_solve_these_challenges = document.getElementById('am-retiree-list-how-we-solve-these-challenges');
  if (am_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#am-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_residency_overview = document.getElementById('am-retiree-section-residency-overview');
  if (am_retiree_section_residency_overview) {
    gsap.fromTo('#am-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_form_who_is_this_residency_for = document.getElementById('am-retiree-form-who-is-this-residency-for');
  if (am_retiree_form_who_is_this_residency_for) {
    gsap.from('#am-retiree-form-who-is-this-residency-for input, #am-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_required_documents = document.getElementById('am-retiree-list-required-documents');
  if (am_retiree_list_required_documents) {
    gsap.from('#am-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_application_process = document.getElementById('am-retiree-list-application-process');
  if (am_retiree_list_application_process) {
    gsap.from('#am-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_timelines_deadlines = document.getElementById('am-retiree-section-timelines-deadlines');
  if (am_retiree_section_timelines_deadlines) {
    gsap.fromTo('#am-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_fees_costs = document.getElementById('am-retiree-section-fees-costs');
  if (am_retiree_section_fees_costs) {
    gsap.fromTo('#am-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_risks_common_mistakes = document.getElementById('am-retiree-list-risks-common-mistakes');
  if (am_retiree_list_risks_common_mistakes) {
    gsap.from('#am-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_diy_vs_professional_assistance = document.getElementById('am-retiree-section-diy-vs-professional-assistance');
  if (am_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_amazonas_specific_context = document.getElementById('am-retiree-section-amazonas-specific-context');
  if (am_retiree_section_amazonas_specific_context) {
    gsap.fromTo('#am-retiree-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_what_our_clients_say = document.getElementById('am-retiree-section-what-our-clients-say');
  if (am_retiree_section_what_our_clients_say) {
    gsap.fromTo('#am-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_frequently_asked_questions = document.getElementById('am-retiree-section-frequently-asked-questions');
  if (am_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#am-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_international_support = document.getElementById('am-retiree-section-international-support');
  if (am_retiree_section_international_support) {
    gsap.fromTo('#am-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_our_credentials = document.getElementById('am-retiree-list-our-credentials');
  if (am_retiree_list_our_credentials) {
    gsap.from('#am-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_list_related_services = document.getElementById('am-retiree-list-related-services');
  if (am_retiree_list_related_services) {
    gsap.from('#am-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_youre_in_good_hands = document.getElementById('am-retiree-section-youre-in-good-hands');
  if (am_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#am-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_retiree_section_21 = document.getElementById('am-retiree-section-21');
  if (am_retiree_section_21) {
    gsap.fromTo('#am-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('am-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (am_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#am-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #am-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_quick_facts = document.getElementById('am-volunteer-list-quick-facts');
  if (am_volunteer_list_quick_facts) {
    gsap.from('#am-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_common_challenges_applicants_face = document.getElementById('am-volunteer-list-common-challenges-applicants-face');
  if (am_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#am-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_how_we_solve_these_challenges = document.getElementById('am-volunteer-list-how-we-solve-these-challenges');
  if (am_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#am-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_residency_overview = document.getElementById('am-volunteer-section-residency-overview');
  if (am_volunteer_section_residency_overview) {
    gsap.fromTo('#am-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_form_who_is_this_residency_for = document.getElementById('am-volunteer-form-who-is-this-residency-for');
  if (am_volunteer_form_who_is_this_residency_for) {
    gsap.from('#am-volunteer-form-who-is-this-residency-for input, #am-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_required_documents = document.getElementById('am-volunteer-list-required-documents');
  if (am_volunteer_list_required_documents) {
    gsap.from('#am-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_application_process = document.getElementById('am-volunteer-list-application-process');
  if (am_volunteer_list_application_process) {
    gsap.from('#am-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_timelines_deadlines = document.getElementById('am-volunteer-section-timelines-deadlines');
  if (am_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#am-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_fees_costs = document.getElementById('am-volunteer-section-fees-costs');
  if (am_volunteer_section_fees_costs) {
    gsap.fromTo('#am-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_risks_common_mistakes = document.getElementById('am-volunteer-list-risks-common-mistakes');
  if (am_volunteer_list_risks_common_mistakes) {
    gsap.from('#am-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_diy_vs_professional_assistance = document.getElementById('am-volunteer-section-diy-vs-professional-assistance');
  if (am_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_amazonas_specific_context = document.getElementById('am-volunteer-section-amazonas-specific-context');
  if (am_volunteer_section_amazonas_specific_context) {
    gsap.fromTo('#am-volunteer-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_what_our_clients_say = document.getElementById('am-volunteer-section-what-our-clients-say');
  if (am_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#am-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_frequently_asked_questions = document.getElementById('am-volunteer-section-frequently-asked-questions');
  if (am_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#am-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_international_support = document.getElementById('am-volunteer-section-international-support');
  if (am_volunteer_section_international_support) {
    gsap.fromTo('#am-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_our_credentials = document.getElementById('am-volunteer-list-our-credentials');
  if (am_volunteer_list_our_credentials) {
    gsap.from('#am-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_list_related_services = document.getElementById('am-volunteer-list-related-services');
  if (am_volunteer_list_related_services) {
    gsap.from('#am-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_youre_in_good_hands = document.getElementById('am-volunteer-section-youre-in-good-hands');
  if (am_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#am-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_volunteer_section_21 = document.getElementById('am-volunteer-section-21');
  if (am_volunteer_section_21) {
    gsap.fromTo('#am-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('am-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (am_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#am-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #am-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_quick_facts = document.getElementById('am-skilledworker-list-quick-facts');
  if (am_skilledworker_list_quick_facts) {
    gsap.from('#am-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_common_challenges_applicants_face = document.getElementById('am-skilledworker-list-common-challenges-applicants-face');
  if (am_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#am-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_how_we_solve_these_challenges = document.getElementById('am-skilledworker-list-how-we-solve-these-challenges');
  if (am_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#am-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_residency_overview = document.getElementById('am-skilledworker-section-residency-overview');
  if (am_skilledworker_section_residency_overview) {
    gsap.fromTo('#am-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_form_who_is_this_residency_for = document.getElementById('am-skilledworker-form-who-is-this-residency-for');
  if (am_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#am-skilledworker-form-who-is-this-residency-for input, #am-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_required_documents = document.getElementById('am-skilledworker-list-required-documents');
  if (am_skilledworker_list_required_documents) {
    gsap.from('#am-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_application_process = document.getElementById('am-skilledworker-list-application-process');
  if (am_skilledworker_list_application_process) {
    gsap.from('#am-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_timelines_deadlines = document.getElementById('am-skilledworker-section-timelines-deadlines');
  if (am_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#am-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_fees_costs = document.getElementById('am-skilledworker-section-fees-costs');
  if (am_skilledworker_section_fees_costs) {
    gsap.fromTo('#am-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_risks_common_mistakes = document.getElementById('am-skilledworker-list-risks-common-mistakes');
  if (am_skilledworker_list_risks_common_mistakes) {
    gsap.from('#am-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_diy_vs_professional_assistance = document.getElementById('am-skilledworker-section-diy-vs-professional-assistance');
  if (am_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_amazonas_specific_context = document.getElementById('am-skilledworker-section-amazonas-specific-context');
  if (am_skilledworker_section_amazonas_specific_context) {
    gsap.fromTo('#am-skilledworker-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_what_our_clients_say = document.getElementById('am-skilledworker-section-what-our-clients-say');
  if (am_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#am-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_frequently_asked_questions = document.getElementById('am-skilledworker-section-frequently-asked-questions');
  if (am_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#am-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_international_support = document.getElementById('am-skilledworker-section-international-support');
  if (am_skilledworker_section_international_support) {
    gsap.fromTo('#am-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_our_credentials = document.getElementById('am-skilledworker-list-our-credentials');
  if (am_skilledworker_list_our_credentials) {
    gsap.from('#am-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_list_related_services = document.getElementById('am-skilledworker-list-related-services');
  if (am_skilledworker_list_related_services) {
    gsap.from('#am-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_youre_in_good_hands = document.getElementById('am-skilledworker-section-youre-in-good-hands');
  if (am_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#am-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_skilledworker_section_21 = document.getElementById('am-skilledworker-section-21');
  if (am_skilledworker_section_21) {
    gsap.fromTo('#am-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('am-religious-form-religious-residency-in-brazil-for-missions');
  if (am_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#am-religious-form-religious-residency-in-brazil-for-missions input, #am-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_quick_facts = document.getElementById('am-religious-list-quick-facts');
  if (am_religious_list_quick_facts) {
    gsap.from('#am-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_common_challenges_applicants_face = document.getElementById('am-religious-list-common-challenges-applicants-face');
  if (am_religious_list_common_challenges_applicants_face) {
    gsap.from('#am-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_how_we_solve_these_challenges = document.getElementById('am-religious-list-how-we-solve-these-challenges');
  if (am_religious_list_how_we_solve_these_challenges) {
    gsap.from('#am-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_residency_overview = document.getElementById('am-religious-section-residency-overview');
  if (am_religious_section_residency_overview) {
    gsap.fromTo('#am-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_form_who_is_this_residency_for = document.getElementById('am-religious-form-who-is-this-residency-for');
  if (am_religious_form_who_is_this_residency_for) {
    gsap.from('#am-religious-form-who-is-this-residency-for input, #am-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_required_documents = document.getElementById('am-religious-list-required-documents');
  if (am_religious_list_required_documents) {
    gsap.from('#am-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_application_process = document.getElementById('am-religious-list-application-process');
  if (am_religious_list_application_process) {
    gsap.from('#am-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_timelines_deadlines = document.getElementById('am-religious-section-timelines-deadlines');
  if (am_religious_section_timelines_deadlines) {
    gsap.fromTo('#am-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_fees_costs = document.getElementById('am-religious-section-fees-costs');
  if (am_religious_section_fees_costs) {
    gsap.fromTo('#am-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_risks_common_mistakes = document.getElementById('am-religious-list-risks-common-mistakes');
  if (am_religious_list_risks_common_mistakes) {
    gsap.from('#am-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_diy_vs_professional_assistance = document.getElementById('am-religious-section-diy-vs-professional-assistance');
  if (am_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_amazonas_specific_context = document.getElementById('am-religious-section-amazonas-specific-context');
  if (am_religious_section_amazonas_specific_context) {
    gsap.fromTo('#am-religious-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_what_our_clients_say = document.getElementById('am-religious-section-what-our-clients-say');
  if (am_religious_section_what_our_clients_say) {
    gsap.fromTo('#am-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_frequently_asked_questions = document.getElementById('am-religious-section-frequently-asked-questions');
  if (am_religious_section_frequently_asked_questions) {
    gsap.fromTo('#am-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_international_support = document.getElementById('am-religious-section-international-support');
  if (am_religious_section_international_support) {
    gsap.fromTo('#am-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_our_credentials = document.getElementById('am-religious-list-our-credentials');
  if (am_religious_list_our_credentials) {
    gsap.from('#am-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_list_related_services = document.getElementById('am-religious-list-related-services');
  if (am_religious_list_related_services) {
    gsap.from('#am-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_youre_in_good_hands = document.getElementById('am-religious-section-youre-in-good-hands');
  if (am_religious_section_youre_in_good_hands) {
    gsap.fromTo('#am-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_religious_section_21 = document.getElementById('am-religious-section-21');
  if (am_religious_section_21) {
    gsap.fromTo('#am-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('am-investor-form-gain-residency-in-brazil-through-investment');
  if (am_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#am-investor-form-gain-residency-in-brazil-through-investment input, #am-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_quick_facts = document.getElementById('am-investor-list-quick-facts');
  if (am_investor_list_quick_facts) {
    gsap.from('#am-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_common_challenges_applicants_face = document.getElementById('am-investor-list-common-challenges-applicants-face');
  if (am_investor_list_common_challenges_applicants_face) {
    gsap.from('#am-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_how_we_solve_these_challenges = document.getElementById('am-investor-list-how-we-solve-these-challenges');
  if (am_investor_list_how_we_solve_these_challenges) {
    gsap.from('#am-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_residency_overview = document.getElementById('am-investor-section-residency-overview');
  if (am_investor_section_residency_overview) {
    gsap.fromTo('#am-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_form_who_is_this_residency_for = document.getElementById('am-investor-form-who-is-this-residency-for');
  if (am_investor_form_who_is_this_residency_for) {
    gsap.from('#am-investor-form-who-is-this-residency-for input, #am-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_required_documents = document.getElementById('am-investor-list-required-documents');
  if (am_investor_list_required_documents) {
    gsap.from('#am-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_application_process = document.getElementById('am-investor-list-application-process');
  if (am_investor_list_application_process) {
    gsap.from('#am-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_timelines_deadlines = document.getElementById('am-investor-section-timelines-deadlines');
  if (am_investor_section_timelines_deadlines) {
    gsap.fromTo('#am-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_fees_costs = document.getElementById('am-investor-section-fees-costs');
  if (am_investor_section_fees_costs) {
    gsap.fromTo('#am-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_risks_common_mistakes = document.getElementById('am-investor-list-risks-common-mistakes');
  if (am_investor_list_risks_common_mistakes) {
    gsap.from('#am-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_diy_vs_professional_assistance = document.getElementById('am-investor-section-diy-vs-professional-assistance');
  if (am_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_amazonas_specific_context = document.getElementById('am-investor-section-amazonas-specific-context');
  if (am_investor_section_amazonas_specific_context) {
    gsap.fromTo('#am-investor-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_what_our_clients_say = document.getElementById('am-investor-section-what-our-clients-say');
  if (am_investor_section_what_our_clients_say) {
    gsap.fromTo('#am-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_frequently_asked_questions = document.getElementById('am-investor-section-frequently-asked-questions');
  if (am_investor_section_frequently_asked_questions) {
    gsap.fromTo('#am-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_international_support = document.getElementById('am-investor-section-international-support');
  if (am_investor_section_international_support) {
    gsap.fromTo('#am-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_our_credentials = document.getElementById('am-investor-list-our-credentials');
  if (am_investor_list_our_credentials) {
    gsap.from('#am-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_list_related_services = document.getElementById('am-investor-list-related-services');
  if (am_investor_list_related_services) {
    gsap.from('#am-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_youre_in_good_hands = document.getElementById('am-investor-section-youre-in-good-hands');
  if (am_investor_section_youre_in_good_hands) {
    gsap.fromTo('#am-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_investor_section_21 = document.getElementById('am-investor-section-21');
  if (am_investor_section_21) {
    gsap.fromTo('#am-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('am-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (am_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#am-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #am-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_quick_facts = document.getElementById('am-healthtreatment-list-quick-facts');
  if (am_healthtreatment_list_quick_facts) {
    gsap.from('#am-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_common_challenges_applicants_face = document.getElementById('am-healthtreatment-list-common-challenges-applicants-face');
  if (am_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#am-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('am-healthtreatment-list-how-we-solve-these-challenges');
  if (am_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#am-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_residency_overview = document.getElementById('am-healthtreatment-section-residency-overview');
  if (am_healthtreatment_section_residency_overview) {
    gsap.fromTo('#am-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_form_who_is_this_residency_for = document.getElementById('am-healthtreatment-form-who-is-this-residency-for');
  if (am_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#am-healthtreatment-form-who-is-this-residency-for input, #am-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_required_documents = document.getElementById('am-healthtreatment-list-required-documents');
  if (am_healthtreatment_list_required_documents) {
    gsap.from('#am-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_application_process = document.getElementById('am-healthtreatment-list-application-process');
  if (am_healthtreatment_list_application_process) {
    gsap.from('#am-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_timelines_deadlines = document.getElementById('am-healthtreatment-section-timelines-deadlines');
  if (am_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#am-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_fees_costs = document.getElementById('am-healthtreatment-section-fees-costs');
  if (am_healthtreatment_section_fees_costs) {
    gsap.fromTo('#am-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_risks_common_mistakes = document.getElementById('am-healthtreatment-list-risks-common-mistakes');
  if (am_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#am-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('am-healthtreatment-section-diy-vs-professional-assistance');
  if (am_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_amazonas_specific_context = document.getElementById('am-healthtreatment-section-amazonas-specific-context');
  if (am_healthtreatment_section_amazonas_specific_context) {
    gsap.fromTo('#am-healthtreatment-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_what_our_clients_say = document.getElementById('am-healthtreatment-section-what-our-clients-say');
  if (am_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#am-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_frequently_asked_questions = document.getElementById('am-healthtreatment-section-frequently-asked-questions');
  if (am_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#am-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_international_support = document.getElementById('am-healthtreatment-section-international-support');
  if (am_healthtreatment_section_international_support) {
    gsap.fromTo('#am-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_our_credentials = document.getElementById('am-healthtreatment-list-our-credentials');
  if (am_healthtreatment_list_our_credentials) {
    gsap.from('#am-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_list_related_services = document.getElementById('am-healthtreatment-list-related-services');
  if (am_healthtreatment_list_related_services) {
    gsap.from('#am-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_youre_in_good_hands = document.getElementById('am-healthtreatment-section-youre-in-good-hands');
  if (am_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#am-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_healthtreatment_section_21 = document.getElementById('am-healthtreatment-section-21');
  if (am_healthtreatment_section_21) {
    gsap.fromTo('#am-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('am-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (am_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#am-cplp-form-residency-for-cplp-citizens-in-brazil input, #am-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_quick_facts = document.getElementById('am-cplp-list-quick-facts');
  if (am_cplp_list_quick_facts) {
    gsap.from('#am-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_common_challenges_applicants_face = document.getElementById('am-cplp-list-common-challenges-applicants-face');
  if (am_cplp_list_common_challenges_applicants_face) {
    gsap.from('#am-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_how_we_solve_these_challenges = document.getElementById('am-cplp-list-how-we-solve-these-challenges');
  if (am_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#am-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_residency_overview = document.getElementById('am-cplp-section-residency-overview');
  if (am_cplp_section_residency_overview) {
    gsap.fromTo('#am-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_form_who_is_this_residency_for = document.getElementById('am-cplp-form-who-is-this-residency-for');
  if (am_cplp_form_who_is_this_residency_for) {
    gsap.from('#am-cplp-form-who-is-this-residency-for input, #am-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_required_documents = document.getElementById('am-cplp-list-required-documents');
  if (am_cplp_list_required_documents) {
    gsap.from('#am-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_application_process = document.getElementById('am-cplp-list-application-process');
  if (am_cplp_list_application_process) {
    gsap.from('#am-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_timelines_deadlines = document.getElementById('am-cplp-section-timelines-deadlines');
  if (am_cplp_section_timelines_deadlines) {
    gsap.fromTo('#am-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_fees_costs = document.getElementById('am-cplp-section-fees-costs');
  if (am_cplp_section_fees_costs) {
    gsap.fromTo('#am-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_risks_common_mistakes = document.getElementById('am-cplp-list-risks-common-mistakes');
  if (am_cplp_list_risks_common_mistakes) {
    gsap.from('#am-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_diy_vs_professional_assistance = document.getElementById('am-cplp-section-diy-vs-professional-assistance');
  if (am_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_amazonas_specific_context = document.getElementById('am-cplp-section-amazonas-specific-context');
  if (am_cplp_section_amazonas_specific_context) {
    gsap.fromTo('#am-cplp-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_what_our_clients_say = document.getElementById('am-cplp-section-what-our-clients-say');
  if (am_cplp_section_what_our_clients_say) {
    gsap.fromTo('#am-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_frequently_asked_questions = document.getElementById('am-cplp-section-frequently-asked-questions');
  if (am_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#am-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_international_support = document.getElementById('am-cplp-section-international-support');
  if (am_cplp_section_international_support) {
    gsap.fromTo('#am-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_our_credentials = document.getElementById('am-cplp-list-our-credentials');
  if (am_cplp_list_our_credentials) {
    gsap.from('#am-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_list_related_services = document.getElementById('am-cplp-list-related-services');
  if (am_cplp_list_related_services) {
    gsap.from('#am-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_youre_in_good_hands = document.getElementById('am-cplp-section-youre-in-good-hands');
  if (am_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#am-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_cplp_section_21 = document.getElementById('am-cplp-section-21');
  if (am_cplp_section_21) {
    gsap.fromTo('#am-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('am-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (am_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#am-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #am-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_quick_facts = document.getElementById('am-youthexchange-list-quick-facts');
  if (am_youthexchange_list_quick_facts) {
    gsap.from('#am-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_common_challenges_applicants_face = document.getElementById('am-youthexchange-list-common-challenges-applicants-face');
  if (am_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#am-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_how_we_solve_these_challenges = document.getElementById('am-youthexchange-list-how-we-solve-these-challenges');
  if (am_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#am-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_residency_overview = document.getElementById('am-youthexchange-section-residency-overview');
  if (am_youthexchange_section_residency_overview) {
    gsap.fromTo('#am-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_form_who_is_this_residency_for = document.getElementById('am-youthexchange-form-who-is-this-residency-for');
  if (am_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#am-youthexchange-form-who-is-this-residency-for input, #am-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_required_documents = document.getElementById('am-youthexchange-list-required-documents');
  if (am_youthexchange_list_required_documents) {
    gsap.from('#am-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_application_process = document.getElementById('am-youthexchange-list-application-process');
  if (am_youthexchange_list_application_process) {
    gsap.from('#am-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_timelines_deadlines = document.getElementById('am-youthexchange-section-timelines-deadlines');
  if (am_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#am-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_fees_costs = document.getElementById('am-youthexchange-section-fees-costs');
  if (am_youthexchange_section_fees_costs) {
    gsap.fromTo('#am-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_risks_common_mistakes = document.getElementById('am-youthexchange-list-risks-common-mistakes');
  if (am_youthexchange_list_risks_common_mistakes) {
    gsap.from('#am-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_diy_vs_professional_assistance = document.getElementById('am-youthexchange-section-diy-vs-professional-assistance');
  if (am_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_amazonas_specific_context = document.getElementById('am-youthexchange-section-amazonas-specific-context');
  if (am_youthexchange_section_amazonas_specific_context) {
    gsap.fromTo('#am-youthexchange-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_what_our_clients_say = document.getElementById('am-youthexchange-section-what-our-clients-say');
  if (am_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#am-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_frequently_asked_questions = document.getElementById('am-youthexchange-section-frequently-asked-questions');
  if (am_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#am-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_international_support = document.getElementById('am-youthexchange-section-international-support');
  if (am_youthexchange_section_international_support) {
    gsap.fromTo('#am-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_our_credentials = document.getElementById('am-youthexchange-list-our-credentials');
  if (am_youthexchange_list_our_credentials) {
    gsap.from('#am-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_list_related_services = document.getElementById('am-youthexchange-list-related-services');
  if (am_youthexchange_list_related_services) {
    gsap.from('#am-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_youre_in_good_hands = document.getElementById('am-youthexchange-section-youre-in-good-hands');
  if (am_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#am-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_youthexchange_section_21 = document.getElementById('am-youthexchange-section-21');
  if (am_youthexchange_section_21) {
    gsap.fromTo('#am-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('am-work-form-work-and-reside-in-brazil-with-work-residency');
  if (am_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#am-work-form-work-and-reside-in-brazil-with-work-residency input, #am-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_quick_facts = document.getElementById('am-work-list-quick-facts');
  if (am_work_list_quick_facts) {
    gsap.from('#am-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_common_challenges_applicants_face = document.getElementById('am-work-list-common-challenges-applicants-face');
  if (am_work_list_common_challenges_applicants_face) {
    gsap.from('#am-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_how_we_solve_these_challenges = document.getElementById('am-work-list-how-we-solve-these-challenges');
  if (am_work_list_how_we_solve_these_challenges) {
    gsap.from('#am-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_residency_overview = document.getElementById('am-work-section-residency-overview');
  if (am_work_section_residency_overview) {
    gsap.fromTo('#am-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_form_who_is_this_residency_for = document.getElementById('am-work-form-who-is-this-residency-for');
  if (am_work_form_who_is_this_residency_for) {
    gsap.from('#am-work-form-who-is-this-residency-for input, #am-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_required_documents = document.getElementById('am-work-list-required-documents');
  if (am_work_list_required_documents) {
    gsap.from('#am-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_application_process = document.getElementById('am-work-list-application-process');
  if (am_work_list_application_process) {
    gsap.from('#am-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_timelines_deadlines = document.getElementById('am-work-section-timelines-deadlines');
  if (am_work_section_timelines_deadlines) {
    gsap.fromTo('#am-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_fees_costs = document.getElementById('am-work-section-fees-costs');
  if (am_work_section_fees_costs) {
    gsap.fromTo('#am-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_risks_common_mistakes = document.getElementById('am-work-list-risks-common-mistakes');
  if (am_work_list_risks_common_mistakes) {
    gsap.from('#am-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_diy_vs_professional_assistance = document.getElementById('am-work-section-diy-vs-professional-assistance');
  if (am_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_amazonas_specific_context = document.getElementById('am-work-section-amazonas-specific-context');
  if (am_work_section_amazonas_specific_context) {
    gsap.fromTo('#am-work-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_what_our_clients_say = document.getElementById('am-work-section-what-our-clients-say');
  if (am_work_section_what_our_clients_say) {
    gsap.fromTo('#am-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_frequently_asked_questions = document.getElementById('am-work-section-frequently-asked-questions');
  if (am_work_section_frequently_asked_questions) {
    gsap.fromTo('#am-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_international_support = document.getElementById('am-work-section-international-support');
  if (am_work_section_international_support) {
    gsap.fromTo('#am-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_our_credentials = document.getElementById('am-work-list-our-credentials');
  if (am_work_list_our_credentials) {
    gsap.from('#am-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_list_related_services = document.getElementById('am-work-list-related-services');
  if (am_work_list_related_services) {
    gsap.from('#am-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_youre_in_good_hands = document.getElementById('am-work-section-youre-in-good-hands');
  if (am_work_section_youre_in_good_hands) {
    gsap.fromTo('#am-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_work_section_21 = document.getElementById('am-work-section-21');
  if (am_work_section_21) {
    gsap.fromTo('#am-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('am-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (am_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#am-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #am-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_quick_facts = document.getElementById('am-startup-list-quick-facts');
  if (am_startup_list_quick_facts) {
    gsap.from('#am-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_common_challenges_applicants_face = document.getElementById('am-startup-list-common-challenges-applicants-face');
  if (am_startup_list_common_challenges_applicants_face) {
    gsap.from('#am-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_how_we_solve_these_challenges = document.getElementById('am-startup-list-how-we-solve-these-challenges');
  if (am_startup_list_how_we_solve_these_challenges) {
    gsap.from('#am-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_visa_overview = document.getElementById('am-startup-section-visa-overview');
  if (am_startup_section_visa_overview) {
    gsap.fromTo('#am-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_form_who_is_this_visa_for = document.getElementById('am-startup-form-who-is-this-visa-for');
  if (am_startup_form_who_is_this_visa_for) {
    gsap.from('#am-startup-form-who-is-this-visa-for input, #am-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_required_documents = document.getElementById('am-startup-list-required-documents');
  if (am_startup_list_required_documents) {
    gsap.from('#am-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_application_process = document.getElementById('am-startup-list-application-process');
  if (am_startup_list_application_process) {
    gsap.from('#am-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_timelines_deadlines = document.getElementById('am-startup-section-timelines-deadlines');
  if (am_startup_section_timelines_deadlines) {
    gsap.fromTo('#am-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_fees_costs = document.getElementById('am-startup-section-fees-costs');
  if (am_startup_section_fees_costs) {
    gsap.fromTo('#am-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_risks_common_mistakes = document.getElementById('am-startup-list-risks-common-mistakes');
  if (am_startup_list_risks_common_mistakes) {
    gsap.from('#am-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_diy_vs_professional_assistance = document.getElementById('am-startup-section-diy-vs-professional-assistance');
  if (am_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_amazonas_specific_context = document.getElementById('am-startup-section-amazonas-specific-context');
  if (am_startup_section_amazonas_specific_context) {
    gsap.fromTo('#am-startup-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_what_our_clients_say = document.getElementById('am-startup-section-what-our-clients-say');
  if (am_startup_section_what_our_clients_say) {
    gsap.fromTo('#am-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_frequently_asked_questions = document.getElementById('am-startup-section-frequently-asked-questions');
  if (am_startup_section_frequently_asked_questions) {
    gsap.fromTo('#am-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_international_support = document.getElementById('am-startup-section-international-support');
  if (am_startup_section_international_support) {
    gsap.fromTo('#am-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_our_credentials = document.getElementById('am-startup-list-our-credentials');
  if (am_startup_list_our_credentials) {
    gsap.from('#am-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_list_related_services = document.getElementById('am-startup-list-related-services');
  if (am_startup_list_related_services) {
    gsap.from('#am-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_youre_in_good_hands = document.getElementById('am-startup-section-youre-in-good-hands');
  if (am_startup_section_youre_in_good_hands) {
    gsap.fromTo('#am-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_startup_section_21 = document.getElementById('am-startup-section-21');
  if (am_startup_section_21) {
    gsap.fromTo('#am-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('am-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (am_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#am-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #am-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_quick_facts = document.getElementById('am-family-list-quick-facts');
  if (am_family_list_quick_facts) {
    gsap.from('#am-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_common_challenges_applicants_face = document.getElementById('am-family-list-common-challenges-applicants-face');
  if (am_family_list_common_challenges_applicants_face) {
    gsap.from('#am-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_how_we_solve_these_challenges = document.getElementById('am-family-list-how-we-solve-these-challenges');
  if (am_family_list_how_we_solve_these_challenges) {
    gsap.from('#am-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_visa_overview = document.getElementById('am-family-section-visa-overview');
  if (am_family_section_visa_overview) {
    gsap.fromTo('#am-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_form_who_is_this_visa_for = document.getElementById('am-family-form-who-is-this-visa-for');
  if (am_family_form_who_is_this_visa_for) {
    gsap.from('#am-family-form-who-is-this-visa-for input, #am-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_required_documents = document.getElementById('am-family-list-required-documents');
  if (am_family_list_required_documents) {
    gsap.from('#am-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_application_process = document.getElementById('am-family-list-application-process');
  if (am_family_list_application_process) {
    gsap.from('#am-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_timelines_deadlines = document.getElementById('am-family-section-timelines-deadlines');
  if (am_family_section_timelines_deadlines) {
    gsap.fromTo('#am-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_fees_costs = document.getElementById('am-family-section-fees-costs');
  if (am_family_section_fees_costs) {
    gsap.fromTo('#am-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_risks_common_mistakes = document.getElementById('am-family-list-risks-common-mistakes');
  if (am_family_list_risks_common_mistakes) {
    gsap.from('#am-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_diy_vs_professional_assistance = document.getElementById('am-family-section-diy-vs-professional-assistance');
  if (am_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_amazonas_specific_context = document.getElementById('am-family-section-amazonas-specific-context');
  if (am_family_section_amazonas_specific_context) {
    gsap.fromTo('#am-family-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_what_our_clients_say = document.getElementById('am-family-section-what-our-clients-say');
  if (am_family_section_what_our_clients_say) {
    gsap.fromTo('#am-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_frequently_asked_questions = document.getElementById('am-family-section-frequently-asked-questions');
  if (am_family_section_frequently_asked_questions) {
    gsap.fromTo('#am-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_international_support = document.getElementById('am-family-section-international-support');
  if (am_family_section_international_support) {
    gsap.fromTo('#am-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_our_credentials = document.getElementById('am-family-list-our-credentials');
  if (am_family_list_our_credentials) {
    gsap.from('#am-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_list_related_services = document.getElementById('am-family-list-related-services');
  if (am_family_list_related_services) {
    gsap.from('#am-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_youre_in_good_hands = document.getElementById('am-family-section-youre-in-good-hands');
  if (am_family_section_youre_in_good_hands) {
    gsap.fromTo('#am-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_family_section_21 = document.getElementById('am-family-section-21');
  if (am_family_section_21) {
    gsap.fromTo('#am-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('am-sports-form-compete-in-brazil-with-the-sports-visa');
  if (am_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#am-sports-form-compete-in-brazil-with-the-sports-visa input, #am-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_quick_facts = document.getElementById('am-sports-list-quick-facts');
  if (am_sports_list_quick_facts) {
    gsap.from('#am-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_common_challenges_applicants_face = document.getElementById('am-sports-list-common-challenges-applicants-face');
  if (am_sports_list_common_challenges_applicants_face) {
    gsap.from('#am-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_how_we_solve_these_challenges = document.getElementById('am-sports-list-how-we-solve-these-challenges');
  if (am_sports_list_how_we_solve_these_challenges) {
    gsap.from('#am-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_visa_overview = document.getElementById('am-sports-section-visa-overview');
  if (am_sports_section_visa_overview) {
    gsap.fromTo('#am-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_form_who_is_this_visa_for = document.getElementById('am-sports-form-who-is-this-visa-for');
  if (am_sports_form_who_is_this_visa_for) {
    gsap.from('#am-sports-form-who-is-this-visa-for input, #am-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_required_documents = document.getElementById('am-sports-list-required-documents');
  if (am_sports_list_required_documents) {
    gsap.from('#am-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_application_process = document.getElementById('am-sports-list-application-process');
  if (am_sports_list_application_process) {
    gsap.from('#am-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_timelines_deadlines = document.getElementById('am-sports-section-timelines-deadlines');
  if (am_sports_section_timelines_deadlines) {
    gsap.fromTo('#am-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_fees_costs = document.getElementById('am-sports-section-fees-costs');
  if (am_sports_section_fees_costs) {
    gsap.fromTo('#am-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_risks_common_mistakes = document.getElementById('am-sports-list-risks-common-mistakes');
  if (am_sports_list_risks_common_mistakes) {
    gsap.from('#am-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_diy_vs_professional_assistance = document.getElementById('am-sports-section-diy-vs-professional-assistance');
  if (am_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_amazonas_specific_context = document.getElementById('am-sports-section-amazonas-specific-context');
  if (am_sports_section_amazonas_specific_context) {
    gsap.fromTo('#am-sports-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_what_our_clients_say = document.getElementById('am-sports-section-what-our-clients-say');
  if (am_sports_section_what_our_clients_say) {
    gsap.fromTo('#am-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_frequently_asked_questions = document.getElementById('am-sports-section-frequently-asked-questions');
  if (am_sports_section_frequently_asked_questions) {
    gsap.fromTo('#am-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_international_support = document.getElementById('am-sports-section-international-support');
  if (am_sports_section_international_support) {
    gsap.fromTo('#am-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_our_credentials = document.getElementById('am-sports-list-our-credentials');
  if (am_sports_list_our_credentials) {
    gsap.from('#am-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_list_related_services = document.getElementById('am-sports-list-related-services');
  if (am_sports_list_related_services) {
    gsap.from('#am-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_youre_in_good_hands = document.getElementById('am-sports-section-youre-in-good-hands');
  if (am_sports_section_youre_in_good_hands) {
    gsap.fromTo('#am-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_sports_section_21 = document.getElementById('am-sports-section-21');
  if (am_sports_section_21) {
    gsap.fromTo('#am-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('am-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (am_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#am-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #am-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_quick_facts = document.getElementById('am-medical-list-quick-facts');
  if (am_medical_list_quick_facts) {
    gsap.from('#am-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_common_challenges_applicants_face = document.getElementById('am-medical-list-common-challenges-applicants-face');
  if (am_medical_list_common_challenges_applicants_face) {
    gsap.from('#am-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_how_we_solve_these_challenges = document.getElementById('am-medical-list-how-we-solve-these-challenges');
  if (am_medical_list_how_we_solve_these_challenges) {
    gsap.from('#am-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_visa_overview = document.getElementById('am-medical-section-visa-overview');
  if (am_medical_section_visa_overview) {
    gsap.fromTo('#am-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_form_who_is_this_visa_for = document.getElementById('am-medical-form-who-is-this-visa-for');
  if (am_medical_form_who_is_this_visa_for) {
    gsap.from('#am-medical-form-who-is-this-visa-for input, #am-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_required_documents = document.getElementById('am-medical-list-required-documents');
  if (am_medical_list_required_documents) {
    gsap.from('#am-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_application_process = document.getElementById('am-medical-list-application-process');
  if (am_medical_list_application_process) {
    gsap.from('#am-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_timelines_deadlines = document.getElementById('am-medical-section-timelines-deadlines');
  if (am_medical_section_timelines_deadlines) {
    gsap.fromTo('#am-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_fees_costs = document.getElementById('am-medical-section-fees-costs');
  if (am_medical_section_fees_costs) {
    gsap.fromTo('#am-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_risks_common_mistakes = document.getElementById('am-medical-list-risks-common-mistakes');
  if (am_medical_list_risks_common_mistakes) {
    gsap.from('#am-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_diy_vs_professional_assistance = document.getElementById('am-medical-section-diy-vs-professional-assistance');
  if (am_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_amazonas_specific_context = document.getElementById('am-medical-section-amazonas-specific-context');
  if (am_medical_section_amazonas_specific_context) {
    gsap.fromTo('#am-medical-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_what_our_clients_say = document.getElementById('am-medical-section-what-our-clients-say');
  if (am_medical_section_what_our_clients_say) {
    gsap.fromTo('#am-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_frequently_asked_questions = document.getElementById('am-medical-section-frequently-asked-questions');
  if (am_medical_section_frequently_asked_questions) {
    gsap.fromTo('#am-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_international_support = document.getElementById('am-medical-section-international-support');
  if (am_medical_section_international_support) {
    gsap.fromTo('#am-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_our_credentials = document.getElementById('am-medical-list-our-credentials');
  if (am_medical_list_our_credentials) {
    gsap.from('#am-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_list_related_services = document.getElementById('am-medical-list-related-services');
  if (am_medical_list_related_services) {
    gsap.from('#am-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_youre_in_good_hands = document.getElementById('am-medical-section-youre-in-good-hands');
  if (am_medical_section_youre_in_good_hands) {
    gsap.fromTo('#am-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_medical_section_21 = document.getElementById('am-medical-section-21');
  if (am_medical_section_21) {
    gsap.fromTo('#am-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('am-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (am_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#am-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #am-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_quick_facts = document.getElementById('am-tourist-list-quick-facts');
  if (am_tourist_list_quick_facts) {
    gsap.from('#am-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_common_challenges_applicants_face = document.getElementById('am-tourist-list-common-challenges-applicants-face');
  if (am_tourist_list_common_challenges_applicants_face) {
    gsap.from('#am-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_how_we_solve_these_challenges = document.getElementById('am-tourist-list-how-we-solve-these-challenges');
  if (am_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#am-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_visa_overview = document.getElementById('am-tourist-section-visa-overview');
  if (am_tourist_section_visa_overview) {
    gsap.fromTo('#am-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_form_who_is_this_visa_for = document.getElementById('am-tourist-form-who-is-this-visa-for');
  if (am_tourist_form_who_is_this_visa_for) {
    gsap.from('#am-tourist-form-who-is-this-visa-for input, #am-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_required_documents = document.getElementById('am-tourist-list-required-documents');
  if (am_tourist_list_required_documents) {
    gsap.from('#am-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_application_process = document.getElementById('am-tourist-list-application-process');
  if (am_tourist_list_application_process) {
    gsap.from('#am-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_timelines_deadlines = document.getElementById('am-tourist-section-timelines-deadlines');
  if (am_tourist_section_timelines_deadlines) {
    gsap.fromTo('#am-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_fees_costs = document.getElementById('am-tourist-section-fees-costs');
  if (am_tourist_section_fees_costs) {
    gsap.fromTo('#am-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_risks_common_mistakes = document.getElementById('am-tourist-list-risks-common-mistakes');
  if (am_tourist_list_risks_common_mistakes) {
    gsap.from('#am-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_diy_vs_professional_assistance = document.getElementById('am-tourist-section-diy-vs-professional-assistance');
  if (am_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_amazonas_specific_context = document.getElementById('am-tourist-section-amazonas-specific-context');
  if (am_tourist_section_amazonas_specific_context) {
    gsap.fromTo('#am-tourist-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_what_our_clients_say = document.getElementById('am-tourist-section-what-our-clients-say');
  if (am_tourist_section_what_our_clients_say) {
    gsap.fromTo('#am-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_frequently_asked_questions = document.getElementById('am-tourist-section-frequently-asked-questions');
  if (am_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#am-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_international_support = document.getElementById('am-tourist-section-international-support');
  if (am_tourist_section_international_support) {
    gsap.fromTo('#am-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_our_credentials = document.getElementById('am-tourist-list-our-credentials');
  if (am_tourist_list_our_credentials) {
    gsap.from('#am-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_list_related_services = document.getElementById('am-tourist-list-related-services');
  if (am_tourist_list_related_services) {
    gsap.from('#am-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_youre_in_good_hands = document.getElementById('am-tourist-section-youre-in-good-hands');
  if (am_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#am-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_tourist_section_21 = document.getElementById('am-tourist-section-21');
  if (am_tourist_section_21) {
    gsap.fromTo('#am-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('am-transit-form-transit-through-brazil-with-the-transit-visa');
  if (am_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#am-transit-form-transit-through-brazil-with-the-transit-visa input, #am-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_quick_facts = document.getElementById('am-transit-list-quick-facts');
  if (am_transit_list_quick_facts) {
    gsap.from('#am-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_common_challenges_applicants_face = document.getElementById('am-transit-list-common-challenges-applicants-face');
  if (am_transit_list_common_challenges_applicants_face) {
    gsap.from('#am-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_how_we_solve_these_challenges = document.getElementById('am-transit-list-how-we-solve-these-challenges');
  if (am_transit_list_how_we_solve_these_challenges) {
    gsap.from('#am-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_visa_overview = document.getElementById('am-transit-section-visa-overview');
  if (am_transit_section_visa_overview) {
    gsap.fromTo('#am-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_form_who_is_this_visa_for = document.getElementById('am-transit-form-who-is-this-visa-for');
  if (am_transit_form_who_is_this_visa_for) {
    gsap.from('#am-transit-form-who-is-this-visa-for input, #am-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_required_documents = document.getElementById('am-transit-list-required-documents');
  if (am_transit_list_required_documents) {
    gsap.from('#am-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_application_process = document.getElementById('am-transit-list-application-process');
  if (am_transit_list_application_process) {
    gsap.from('#am-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_timelines_deadlines = document.getElementById('am-transit-section-timelines-deadlines');
  if (am_transit_section_timelines_deadlines) {
    gsap.fromTo('#am-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_fees_costs = document.getElementById('am-transit-section-fees-costs');
  if (am_transit_section_fees_costs) {
    gsap.fromTo('#am-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_risks_common_mistakes = document.getElementById('am-transit-list-risks-common-mistakes');
  if (am_transit_list_risks_common_mistakes) {
    gsap.from('#am-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_diy_vs_professional_assistance = document.getElementById('am-transit-section-diy-vs-professional-assistance');
  if (am_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_amazonas_specific_context = document.getElementById('am-transit-section-amazonas-specific-context');
  if (am_transit_section_amazonas_specific_context) {
    gsap.fromTo('#am-transit-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_what_our_clients_say = document.getElementById('am-transit-section-what-our-clients-say');
  if (am_transit_section_what_our_clients_say) {
    gsap.fromTo('#am-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_frequently_asked_questions = document.getElementById('am-transit-section-frequently-asked-questions');
  if (am_transit_section_frequently_asked_questions) {
    gsap.fromTo('#am-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_international_support = document.getElementById('am-transit-section-international-support');
  if (am_transit_section_international_support) {
    gsap.fromTo('#am-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_our_credentials = document.getElementById('am-transit-list-our-credentials');
  if (am_transit_list_our_credentials) {
    gsap.from('#am-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_list_related_services = document.getElementById('am-transit-list-related-services');
  if (am_transit_list_related_services) {
    gsap.from('#am-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_youre_in_good_hands = document.getElementById('am-transit-section-youre-in-good-hands');
  if (am_transit_section_youre_in_good_hands) {
    gsap.fromTo('#am-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_transit_section_21 = document.getElementById('am-transit-section-21');
  if (am_transit_section_21) {
    gsap.fromTo('#am-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_form_study_in_brazil_with_the_student_visa = document.getElementById('am-student-form-study-in-brazil-with-the-student-visa');
  if (am_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#am-student-form-study-in-brazil-with-the-student-visa input, #am-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_quick_facts = document.getElementById('am-student-list-quick-facts');
  if (am_student_list_quick_facts) {
    gsap.from('#am-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_common_challenges_applicants_face = document.getElementById('am-student-list-common-challenges-applicants-face');
  if (am_student_list_common_challenges_applicants_face) {
    gsap.from('#am-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_how_we_solve_these_challenges = document.getElementById('am-student-list-how-we-solve-these-challenges');
  if (am_student_list_how_we_solve_these_challenges) {
    gsap.from('#am-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_visa_overview = document.getElementById('am-student-section-visa-overview');
  if (am_student_section_visa_overview) {
    gsap.fromTo('#am-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_form_who_is_this_visa_for = document.getElementById('am-student-form-who-is-this-visa-for');
  if (am_student_form_who_is_this_visa_for) {
    gsap.from('#am-student-form-who-is-this-visa-for input, #am-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_required_documents = document.getElementById('am-student-list-required-documents');
  if (am_student_list_required_documents) {
    gsap.from('#am-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_application_process = document.getElementById('am-student-list-application-process');
  if (am_student_list_application_process) {
    gsap.from('#am-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_timelines_deadlines = document.getElementById('am-student-section-timelines-deadlines');
  if (am_student_section_timelines_deadlines) {
    gsap.fromTo('#am-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_fees_costs = document.getElementById('am-student-section-fees-costs');
  if (am_student_section_fees_costs) {
    gsap.fromTo('#am-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_risks_common_mistakes = document.getElementById('am-student-list-risks-common-mistakes');
  if (am_student_list_risks_common_mistakes) {
    gsap.from('#am-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_diy_vs_professional_assistance = document.getElementById('am-student-section-diy-vs-professional-assistance');
  if (am_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_amazonas_specific_context = document.getElementById('am-student-section-amazonas-specific-context');
  if (am_student_section_amazonas_specific_context) {
    gsap.fromTo('#am-student-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_what_our_clients_say = document.getElementById('am-student-section-what-our-clients-say');
  if (am_student_section_what_our_clients_say) {
    gsap.fromTo('#am-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_frequently_asked_questions = document.getElementById('am-student-section-frequently-asked-questions');
  if (am_student_section_frequently_asked_questions) {
    gsap.fromTo('#am-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_international_support = document.getElementById('am-student-section-international-support');
  if (am_student_section_international_support) {
    gsap.fromTo('#am-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_our_credentials = document.getElementById('am-student-list-our-credentials');
  if (am_student_list_our_credentials) {
    gsap.from('#am-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_list_related_services = document.getElementById('am-student-list-related-services');
  if (am_student_list_related_services) {
    gsap.from('#am-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_youre_in_good_hands = document.getElementById('am-student-section-youre-in-good-hands');
  if (am_student_section_youre_in_good_hands) {
    gsap.fromTo('#am-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_student_section_21 = document.getElementById('am-student-section-21');
  if (am_student_section_21) {
    gsap.fromTo('#am-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('am-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (am_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#am-business-form-conduct-business-in-brazil-with-the-business-visa input, #am-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_quick_facts = document.getElementById('am-business-list-quick-facts');
  if (am_business_list_quick_facts) {
    gsap.from('#am-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_common_challenges_applicants_face = document.getElementById('am-business-list-common-challenges-applicants-face');
  if (am_business_list_common_challenges_applicants_face) {
    gsap.from('#am-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_how_we_solve_these_challenges = document.getElementById('am-business-list-how-we-solve-these-challenges');
  if (am_business_list_how_we_solve_these_challenges) {
    gsap.from('#am-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_visa_overview = document.getElementById('am-business-section-visa-overview');
  if (am_business_section_visa_overview) {
    gsap.fromTo('#am-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_form_who_is_this_visa_for = document.getElementById('am-business-form-who-is-this-visa-for');
  if (am_business_form_who_is_this_visa_for) {
    gsap.from('#am-business-form-who-is-this-visa-for input, #am-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_required_documents = document.getElementById('am-business-list-required-documents');
  if (am_business_list_required_documents) {
    gsap.from('#am-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_application_process = document.getElementById('am-business-list-application-process');
  if (am_business_list_application_process) {
    gsap.from('#am-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_timelines_deadlines = document.getElementById('am-business-section-timelines-deadlines');
  if (am_business_section_timelines_deadlines) {
    gsap.fromTo('#am-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_fees_costs = document.getElementById('am-business-section-fees-costs');
  if (am_business_section_fees_costs) {
    gsap.fromTo('#am-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_risks_common_mistakes = document.getElementById('am-business-list-risks-common-mistakes');
  if (am_business_list_risks_common_mistakes) {
    gsap.from('#am-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_diy_vs_professional_assistance = document.getElementById('am-business-section-diy-vs-professional-assistance');
  if (am_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_amazonas_specific_context = document.getElementById('am-business-section-amazonas-specific-context');
  if (am_business_section_amazonas_specific_context) {
    gsap.fromTo('#am-business-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_what_our_clients_say = document.getElementById('am-business-section-what-our-clients-say');
  if (am_business_section_what_our_clients_say) {
    gsap.fromTo('#am-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_frequently_asked_questions = document.getElementById('am-business-section-frequently-asked-questions');
  if (am_business_section_frequently_asked_questions) {
    gsap.fromTo('#am-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_international_support = document.getElementById('am-business-section-international-support');
  if (am_business_section_international_support) {
    gsap.fromTo('#am-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_our_credentials = document.getElementById('am-business-list-our-credentials');
  if (am_business_list_our_credentials) {
    gsap.from('#am-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_list_related_services = document.getElementById('am-business-list-related-services');
  if (am_business_list_related_services) {
    gsap.from('#am-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_youre_in_good_hands = document.getElementById('am-business-section-youre-in-good-hands');
  if (am_business_section_youre_in_good_hands) {
    gsap.fromTo('#am-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_business_section_21 = document.getElementById('am-business-section-21');
  if (am_business_section_21) {
    gsap.fromTo('#am-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('am-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (am_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#am-research-form-conduct-research-in-brazil-with-the-research-visa input, #am-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_quick_facts = document.getElementById('am-research-list-quick-facts');
  if (am_research_list_quick_facts) {
    gsap.from('#am-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_common_challenges_applicants_face = document.getElementById('am-research-list-common-challenges-applicants-face');
  if (am_research_list_common_challenges_applicants_face) {
    gsap.from('#am-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_how_we_solve_these_challenges = document.getElementById('am-research-list-how-we-solve-these-challenges');
  if (am_research_list_how_we_solve_these_challenges) {
    gsap.from('#am-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_visa_overview = document.getElementById('am-research-section-visa-overview');
  if (am_research_section_visa_overview) {
    gsap.fromTo('#am-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_form_who_is_this_visa_for = document.getElementById('am-research-form-who-is-this-visa-for');
  if (am_research_form_who_is_this_visa_for) {
    gsap.from('#am-research-form-who-is-this-visa-for input, #am-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_required_documents = document.getElementById('am-research-list-required-documents');
  if (am_research_list_required_documents) {
    gsap.from('#am-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_application_process = document.getElementById('am-research-list-application-process');
  if (am_research_list_application_process) {
    gsap.from('#am-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_timelines_deadlines = document.getElementById('am-research-section-timelines-deadlines');
  if (am_research_section_timelines_deadlines) {
    gsap.fromTo('#am-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_fees_costs = document.getElementById('am-research-section-fees-costs');
  if (am_research_section_fees_costs) {
    gsap.fromTo('#am-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_risks_common_mistakes = document.getElementById('am-research-list-risks-common-mistakes');
  if (am_research_list_risks_common_mistakes) {
    gsap.from('#am-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_diy_vs_professional_assistance = document.getElementById('am-research-section-diy-vs-professional-assistance');
  if (am_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_amazonas_specific_context = document.getElementById('am-research-section-amazonas-specific-context');
  if (am_research_section_amazonas_specific_context) {
    gsap.fromTo('#am-research-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_what_our_clients_say = document.getElementById('am-research-section-what-our-clients-say');
  if (am_research_section_what_our_clients_say) {
    gsap.fromTo('#am-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_frequently_asked_questions = document.getElementById('am-research-section-frequently-asked-questions');
  if (am_research_section_frequently_asked_questions) {
    gsap.fromTo('#am-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_international_support = document.getElementById('am-research-section-international-support');
  if (am_research_section_international_support) {
    gsap.fromTo('#am-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_our_credentials = document.getElementById('am-research-list-our-credentials');
  if (am_research_list_our_credentials) {
    gsap.from('#am-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_list_related_services = document.getElementById('am-research-list-related-services');
  if (am_research_list_related_services) {
    gsap.from('#am-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_youre_in_good_hands = document.getElementById('am-research-section-youre-in-good-hands');
  if (am_research_section_youre_in_good_hands) {
    gsap.fromTo('#am-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_research_section_21 = document.getElementById('am-research-section-21');
  if (am_research_section_21) {
    gsap.fromTo('#am-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('am-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (am_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#am-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #am-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_quick_facts = document.getElementById('am-diplomatic-list-quick-facts');
  if (am_diplomatic_list_quick_facts) {
    gsap.from('#am-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_common_challenges_applicants_face = document.getElementById('am-diplomatic-list-common-challenges-applicants-face');
  if (am_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#am-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_how_we_solve_these_challenges = document.getElementById('am-diplomatic-list-how-we-solve-these-challenges');
  if (am_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#am-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_visa_overview = document.getElementById('am-diplomatic-section-visa-overview');
  if (am_diplomatic_section_visa_overview) {
    gsap.fromTo('#am-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_form_who_is_this_visa_for = document.getElementById('am-diplomatic-form-who-is-this-visa-for');
  if (am_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#am-diplomatic-form-who-is-this-visa-for input, #am-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_required_documents = document.getElementById('am-diplomatic-list-required-documents');
  if (am_diplomatic_list_required_documents) {
    gsap.from('#am-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_application_process = document.getElementById('am-diplomatic-list-application-process');
  if (am_diplomatic_list_application_process) {
    gsap.from('#am-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_timelines_deadlines = document.getElementById('am-diplomatic-section-timelines-deadlines');
  if (am_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#am-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_fees_costs = document.getElementById('am-diplomatic-section-fees-costs');
  if (am_diplomatic_section_fees_costs) {
    gsap.fromTo('#am-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_risks_common_mistakes = document.getElementById('am-diplomatic-list-risks-common-mistakes');
  if (am_diplomatic_list_risks_common_mistakes) {
    gsap.from('#am-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_diy_vs_professional_assistance = document.getElementById('am-diplomatic-section-diy-vs-professional-assistance');
  if (am_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_amazonas_specific_context = document.getElementById('am-diplomatic-section-amazonas-specific-context');
  if (am_diplomatic_section_amazonas_specific_context) {
    gsap.fromTo('#am-diplomatic-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_what_our_clients_say = document.getElementById('am-diplomatic-section-what-our-clients-say');
  if (am_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#am-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_frequently_asked_questions = document.getElementById('am-diplomatic-section-frequently-asked-questions');
  if (am_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#am-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_international_support = document.getElementById('am-diplomatic-section-international-support');
  if (am_diplomatic_section_international_support) {
    gsap.fromTo('#am-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_our_credentials = document.getElementById('am-diplomatic-list-our-credentials');
  if (am_diplomatic_list_our_credentials) {
    gsap.from('#am-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_list_related_services = document.getElementById('am-diplomatic-list-related-services');
  if (am_diplomatic_list_related_services) {
    gsap.from('#am-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_youre_in_good_hands = document.getElementById('am-diplomatic-section-youre-in-good-hands');
  if (am_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#am-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_diplomatic_section_21 = document.getElementById('am-diplomatic-section-21');
  if (am_diplomatic_section_21) {
    gsap.fromTo('#am-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('am-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (am_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#am-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #am-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_quick_facts = document.getElementById('am-journalist-list-quick-facts');
  if (am_journalist_list_quick_facts) {
    gsap.from('#am-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_common_challenges_applicants_face = document.getElementById('am-journalist-list-common-challenges-applicants-face');
  if (am_journalist_list_common_challenges_applicants_face) {
    gsap.from('#am-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_how_we_solve_these_challenges = document.getElementById('am-journalist-list-how-we-solve-these-challenges');
  if (am_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#am-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_visa_overview = document.getElementById('am-journalist-section-visa-overview');
  if (am_journalist_section_visa_overview) {
    gsap.fromTo('#am-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_form_who_is_this_visa_for = document.getElementById('am-journalist-form-who-is-this-visa-for');
  if (am_journalist_form_who_is_this_visa_for) {
    gsap.from('#am-journalist-form-who-is-this-visa-for input, #am-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_required_documents = document.getElementById('am-journalist-list-required-documents');
  if (am_journalist_list_required_documents) {
    gsap.from('#am-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_application_process = document.getElementById('am-journalist-list-application-process');
  if (am_journalist_list_application_process) {
    gsap.from('#am-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_timelines_deadlines = document.getElementById('am-journalist-section-timelines-deadlines');
  if (am_journalist_section_timelines_deadlines) {
    gsap.fromTo('#am-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_fees_costs = document.getElementById('am-journalist-section-fees-costs');
  if (am_journalist_section_fees_costs) {
    gsap.fromTo('#am-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_risks_common_mistakes = document.getElementById('am-journalist-list-risks-common-mistakes');
  if (am_journalist_list_risks_common_mistakes) {
    gsap.from('#am-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_diy_vs_professional_assistance = document.getElementById('am-journalist-section-diy-vs-professional-assistance');
  if (am_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_amazonas_specific_context = document.getElementById('am-journalist-section-amazonas-specific-context');
  if (am_journalist_section_amazonas_specific_context) {
    gsap.fromTo('#am-journalist-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_what_our_clients_say = document.getElementById('am-journalist-section-what-our-clients-say');
  if (am_journalist_section_what_our_clients_say) {
    gsap.fromTo('#am-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_frequently_asked_questions = document.getElementById('am-journalist-section-frequently-asked-questions');
  if (am_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#am-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_international_support = document.getElementById('am-journalist-section-international-support');
  if (am_journalist_section_international_support) {
    gsap.fromTo('#am-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_our_credentials = document.getElementById('am-journalist-list-our-credentials');
  if (am_journalist_list_our_credentials) {
    gsap.from('#am-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_list_related_services = document.getElementById('am-journalist-list-related-services');
  if (am_journalist_list_related_services) {
    gsap.from('#am-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_youre_in_good_hands = document.getElementById('am-journalist-section-youre-in-good-hands');
  if (am_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#am-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_journalist_section_21 = document.getElementById('am-journalist-section-21');
  if (am_journalist_section_21) {
    gsap.fromTo('#am-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('am-fines-form-resolve-immigration-fines-in-brazil');
  if (am_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#am-fines-form-resolve-immigration-fines-in-brazil input, #am-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_quick_facts = document.getElementById('am-fines-list-quick-facts');
  if (am_fines_list_quick_facts) {
    gsap.from('#am-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_common_challenges_applicants_face = document.getElementById('am-fines-list-common-challenges-applicants-face');
  if (am_fines_list_common_challenges_applicants_face) {
    gsap.from('#am-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_how_we_solve_these_challenges = document.getElementById('am-fines-list-how-we-solve-these-challenges');
  if (am_fines_list_how_we_solve_these_challenges) {
    gsap.from('#am-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_service_overview = document.getElementById('am-fines-section-service-overview');
  if (am_fines_section_service_overview) {
    gsap.fromTo('#am-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_form_who_is_this_service_for = document.getElementById('am-fines-form-who-is-this-service-for');
  if (am_fines_form_who_is_this_service_for) {
    gsap.from('#am-fines-form-who-is-this-service-for input, #am-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_required_documents = document.getElementById('am-fines-list-required-documents');
  if (am_fines_list_required_documents) {
    gsap.from('#am-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_process = document.getElementById('am-fines-list-process');
  if (am_fines_list_process) {
    gsap.from('#am-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_timelines_deadlines = document.getElementById('am-fines-section-timelines-deadlines');
  if (am_fines_section_timelines_deadlines) {
    gsap.fromTo('#am-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_fees_costs = document.getElementById('am-fines-section-fees-costs');
  if (am_fines_section_fees_costs) {
    gsap.fromTo('#am-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_risks_common_mistakes = document.getElementById('am-fines-list-risks-common-mistakes');
  if (am_fines_list_risks_common_mistakes) {
    gsap.from('#am-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_diy_vs_professional_assistance = document.getElementById('am-fines-section-diy-vs-professional-assistance');
  if (am_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_amazonas_specific_context = document.getElementById('am-fines-section-amazonas-specific-context');
  if (am_fines_section_amazonas_specific_context) {
    gsap.fromTo('#am-fines-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_what_our_clients_say = document.getElementById('am-fines-section-what-our-clients-say');
  if (am_fines_section_what_our_clients_say) {
    gsap.fromTo('#am-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_frequently_asked_questions = document.getElementById('am-fines-section-frequently-asked-questions');
  if (am_fines_section_frequently_asked_questions) {
    gsap.fromTo('#am-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_international_support = document.getElementById('am-fines-section-international-support');
  if (am_fines_section_international_support) {
    gsap.fromTo('#am-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_our_credentials = document.getElementById('am-fines-list-our-credentials');
  if (am_fines_list_our_credentials) {
    gsap.from('#am-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_list_related_services = document.getElementById('am-fines-list-related-services');
  if (am_fines_list_related_services) {
    gsap.from('#am-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_youre_in_good_hands = document.getElementById('am-fines-section-youre-in-good-hands');
  if (am_fines_section_youre_in_good_hands) {
    gsap.fromTo('#am-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_fines_section_21 = document.getElementById('am-fines-section-21');
  if (am_fines_section_21) {
    gsap.fromTo('#am-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_form_deportation_assistance_in_brazil = document.getElementById('am-deportation-form-deportation-assistance-in-brazil');
  if (am_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#am-deportation-form-deportation-assistance-in-brazil input, #am-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_quick_facts = document.getElementById('am-deportation-list-quick-facts');
  if (am_deportation_list_quick_facts) {
    gsap.from('#am-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_common_challenges_applicants_face = document.getElementById('am-deportation-list-common-challenges-applicants-face');
  if (am_deportation_list_common_challenges_applicants_face) {
    gsap.from('#am-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_how_we_solve_these_challenges = document.getElementById('am-deportation-list-how-we-solve-these-challenges');
  if (am_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#am-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_service_overview = document.getElementById('am-deportation-section-service-overview');
  if (am_deportation_section_service_overview) {
    gsap.fromTo('#am-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_form_who_is_this_service_for = document.getElementById('am-deportation-form-who-is-this-service-for');
  if (am_deportation_form_who_is_this_service_for) {
    gsap.from('#am-deportation-form-who-is-this-service-for input, #am-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_required_documents = document.getElementById('am-deportation-list-required-documents');
  if (am_deportation_list_required_documents) {
    gsap.from('#am-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_process = document.getElementById('am-deportation-list-process');
  if (am_deportation_list_process) {
    gsap.from('#am-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_timelines_deadlines = document.getElementById('am-deportation-section-timelines-deadlines');
  if (am_deportation_section_timelines_deadlines) {
    gsap.fromTo('#am-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_fees_costs = document.getElementById('am-deportation-section-fees-costs');
  if (am_deportation_section_fees_costs) {
    gsap.fromTo('#am-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_risks_common_mistakes = document.getElementById('am-deportation-list-risks-common-mistakes');
  if (am_deportation_list_risks_common_mistakes) {
    gsap.from('#am-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_diy_vs_professional_assistance = document.getElementById('am-deportation-section-diy-vs-professional-assistance');
  if (am_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_amazonas_specific_context = document.getElementById('am-deportation-section-amazonas-specific-context');
  if (am_deportation_section_amazonas_specific_context) {
    gsap.fromTo('#am-deportation-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_what_our_clients_say = document.getElementById('am-deportation-section-what-our-clients-say');
  if (am_deportation_section_what_our_clients_say) {
    gsap.fromTo('#am-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_frequently_asked_questions = document.getElementById('am-deportation-section-frequently-asked-questions');
  if (am_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#am-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_international_support = document.getElementById('am-deportation-section-international-support');
  if (am_deportation_section_international_support) {
    gsap.fromTo('#am-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_our_credentials = document.getElementById('am-deportation-list-our-credentials');
  if (am_deportation_list_our_credentials) {
    gsap.from('#am-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_list_related_services = document.getElementById('am-deportation-list-related-services');
  if (am_deportation_list_related_services) {
    gsap.from('#am-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_youre_in_good_hands = document.getElementById('am-deportation-section-youre-in-good-hands');
  if (am_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#am-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_deportation_section_21 = document.getElementById('am-deportation-section-21');
  if (am_deportation_section_21) {
    gsap.fromTo('#am-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('am-translation-form-sworn-document-translation-services-in-brazil');
  if (am_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#am-translation-form-sworn-document-translation-services-in-brazil input, #am-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_quick_facts = document.getElementById('am-translation-list-quick-facts');
  if (am_translation_list_quick_facts) {
    gsap.from('#am-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_common_challenges_applicants_face = document.getElementById('am-translation-list-common-challenges-applicants-face');
  if (am_translation_list_common_challenges_applicants_face) {
    gsap.from('#am-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_how_we_solve_these_challenges = document.getElementById('am-translation-list-how-we-solve-these-challenges');
  if (am_translation_list_how_we_solve_these_challenges) {
    gsap.from('#am-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_service_overview = document.getElementById('am-translation-section-service-overview');
  if (am_translation_section_service_overview) {
    gsap.fromTo('#am-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_form_who_is_this_service_for = document.getElementById('am-translation-form-who-is-this-service-for');
  if (am_translation_form_who_is_this_service_for) {
    gsap.from('#am-translation-form-who-is-this-service-for input, #am-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_required_documents = document.getElementById('am-translation-list-required-documents');
  if (am_translation_list_required_documents) {
    gsap.from('#am-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_process = document.getElementById('am-translation-list-process');
  if (am_translation_list_process) {
    gsap.from('#am-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_timelines_deadlines = document.getElementById('am-translation-section-timelines-deadlines');
  if (am_translation_section_timelines_deadlines) {
    gsap.fromTo('#am-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_fees_costs = document.getElementById('am-translation-section-fees-costs');
  if (am_translation_section_fees_costs) {
    gsap.fromTo('#am-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_risks_common_mistakes = document.getElementById('am-translation-list-risks-common-mistakes');
  if (am_translation_list_risks_common_mistakes) {
    gsap.from('#am-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_diy_vs_professional_assistance = document.getElementById('am-translation-section-diy-vs-professional-assistance');
  if (am_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_amazonas_specific_context = document.getElementById('am-translation-section-amazonas-specific-context');
  if (am_translation_section_amazonas_specific_context) {
    gsap.fromTo('#am-translation-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_what_our_clients_say = document.getElementById('am-translation-section-what-our-clients-say');
  if (am_translation_section_what_our_clients_say) {
    gsap.fromTo('#am-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_frequently_asked_questions = document.getElementById('am-translation-section-frequently-asked-questions');
  if (am_translation_section_frequently_asked_questions) {
    gsap.fromTo('#am-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_international_support = document.getElementById('am-translation-section-international-support');
  if (am_translation_section_international_support) {
    gsap.fromTo('#am-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_our_credentials = document.getElementById('am-translation-list-our-credentials');
  if (am_translation_list_our_credentials) {
    gsap.from('#am-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_list_related_services = document.getElementById('am-translation-list-related-services');
  if (am_translation_list_related_services) {
    gsap.from('#am-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_youre_in_good_hands = document.getElementById('am-translation-section-youre-in-good-hands');
  if (am_translation_section_youre_in_good_hands) {
    gsap.fromTo('#am-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_translation_section_21 = document.getElementById('am-translation-section-21');
  if (am_translation_section_21) {
    gsap.fromTo('#am-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('am-expulsion-form-expulsion-assistance-in-brazil');
  if (am_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#am-expulsion-form-expulsion-assistance-in-brazil input, #am-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_quick_facts = document.getElementById('am-expulsion-list-quick-facts');
  if (am_expulsion_list_quick_facts) {
    gsap.from('#am-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_common_challenges_applicants_face = document.getElementById('am-expulsion-list-common-challenges-applicants-face');
  if (am_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#am-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_how_we_solve_these_challenges = document.getElementById('am-expulsion-list-how-we-solve-these-challenges');
  if (am_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#am-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_service_overview = document.getElementById('am-expulsion-section-service-overview');
  if (am_expulsion_section_service_overview) {
    gsap.fromTo('#am-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_form_who_is_this_service_for = document.getElementById('am-expulsion-form-who-is-this-service-for');
  if (am_expulsion_form_who_is_this_service_for) {
    gsap.from('#am-expulsion-form-who-is-this-service-for input, #am-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_required_documents = document.getElementById('am-expulsion-list-required-documents');
  if (am_expulsion_list_required_documents) {
    gsap.from('#am-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_process = document.getElementById('am-expulsion-list-process');
  if (am_expulsion_list_process) {
    gsap.from('#am-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_timelines_deadlines = document.getElementById('am-expulsion-section-timelines-deadlines');
  if (am_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#am-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_fees_costs = document.getElementById('am-expulsion-section-fees-costs');
  if (am_expulsion_section_fees_costs) {
    gsap.fromTo('#am-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_risks_common_mistakes = document.getElementById('am-expulsion-list-risks-common-mistakes');
  if (am_expulsion_list_risks_common_mistakes) {
    gsap.from('#am-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_diy_vs_professional_assistance = document.getElementById('am-expulsion-section-diy-vs-professional-assistance');
  if (am_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_amazonas_specific_context = document.getElementById('am-expulsion-section-amazonas-specific-context');
  if (am_expulsion_section_amazonas_specific_context) {
    gsap.fromTo('#am-expulsion-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_what_our_clients_say = document.getElementById('am-expulsion-section-what-our-clients-say');
  if (am_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#am-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_frequently_asked_questions = document.getElementById('am-expulsion-section-frequently-asked-questions');
  if (am_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#am-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_international_support = document.getElementById('am-expulsion-section-international-support');
  if (am_expulsion_section_international_support) {
    gsap.fromTo('#am-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_our_credentials = document.getElementById('am-expulsion-list-our-credentials');
  if (am_expulsion_list_our_credentials) {
    gsap.from('#am-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_list_related_services = document.getElementById('am-expulsion-list-related-services');
  if (am_expulsion_list_related_services) {
    gsap.from('#am-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_youre_in_good_hands = document.getElementById('am-expulsion-section-youre-in-good-hands');
  if (am_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#am-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_expulsion_section_21 = document.getElementById('am-expulsion-section-21');
  if (am_expulsion_section_21) {
    gsap.fromTo('#am-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('am-appeals-form-appeal-immigration-denials-in-brazil');
  if (am_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#am-appeals-form-appeal-immigration-denials-in-brazil input, #am-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_quick_facts = document.getElementById('am-appeals-list-quick-facts');
  if (am_appeals_list_quick_facts) {
    gsap.from('#am-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_common_challenges_applicants_face = document.getElementById('am-appeals-list-common-challenges-applicants-face');
  if (am_appeals_list_common_challenges_applicants_face) {
    gsap.from('#am-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_how_we_solve_these_challenges = document.getElementById('am-appeals-list-how-we-solve-these-challenges');
  if (am_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#am-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_service_overview = document.getElementById('am-appeals-section-service-overview');
  if (am_appeals_section_service_overview) {
    gsap.fromTo('#am-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_form_who_is_this_service_for = document.getElementById('am-appeals-form-who-is-this-service-for');
  if (am_appeals_form_who_is_this_service_for) {
    gsap.from('#am-appeals-form-who-is-this-service-for input, #am-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_required_documents = document.getElementById('am-appeals-list-required-documents');
  if (am_appeals_list_required_documents) {
    gsap.from('#am-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_appeal_process = document.getElementById('am-appeals-list-appeal-process');
  if (am_appeals_list_appeal_process) {
    gsap.from('#am-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_timelines_deadlines = document.getElementById('am-appeals-section-timelines-deadlines');
  if (am_appeals_section_timelines_deadlines) {
    gsap.fromTo('#am-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_fees_costs = document.getElementById('am-appeals-section-fees-costs');
  if (am_appeals_section_fees_costs) {
    gsap.fromTo('#am-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_risks_common_mistakes = document.getElementById('am-appeals-list-risks-common-mistakes');
  if (am_appeals_list_risks_common_mistakes) {
    gsap.from('#am-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_diy_vs_professional_assistance = document.getElementById('am-appeals-section-diy-vs-professional-assistance');
  if (am_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_amazonas_specific_context = document.getElementById('am-appeals-section-amazonas-specific-context');
  if (am_appeals_section_amazonas_specific_context) {
    gsap.fromTo('#am-appeals-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_what_our_clients_say = document.getElementById('am-appeals-section-what-our-clients-say');
  if (am_appeals_section_what_our_clients_say) {
    gsap.fromTo('#am-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_frequently_asked_questions = document.getElementById('am-appeals-section-frequently-asked-questions');
  if (am_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#am-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_international_support = document.getElementById('am-appeals-section-international-support');
  if (am_appeals_section_international_support) {
    gsap.fromTo('#am-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_our_credentials = document.getElementById('am-appeals-list-our-credentials');
  if (am_appeals_list_our_credentials) {
    gsap.from('#am-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_list_related_services = document.getElementById('am-appeals-list-related-services');
  if (am_appeals_list_related_services) {
    gsap.from('#am-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_youre_in_good_hands = document.getElementById('am-appeals-section-youre-in-good-hands');
  if (am_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#am-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_appeals_section_21 = document.getElementById('am-appeals-section-21');
  if (am_appeals_section_21) {
    gsap.fromTo('#am-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('am-consular-form-consular-services-in-brazil-for-citizens');
  if (am_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#am-consular-form-consular-services-in-brazil-for-citizens input, #am-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_quick_facts = document.getElementById('am-consular-list-quick-facts');
  if (am_consular_list_quick_facts) {
    gsap.from('#am-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_common_challenges_applicants_face = document.getElementById('am-consular-list-common-challenges-applicants-face');
  if (am_consular_list_common_challenges_applicants_face) {
    gsap.from('#am-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_how_we_solve_these_challenges = document.getElementById('am-consular-list-how-we-solve-these-challenges');
  if (am_consular_list_how_we_solve_these_challenges) {
    gsap.from('#am-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_service_overview = document.getElementById('am-consular-section-service-overview');
  if (am_consular_section_service_overview) {
    gsap.fromTo('#am-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_form_who_is_this_service_for = document.getElementById('am-consular-form-who-is-this-service-for');
  if (am_consular_form_who_is_this_service_for) {
    gsap.from('#am-consular-form-who-is-this-service-for input, #am-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_required_documents = document.getElementById('am-consular-list-required-documents');
  if (am_consular_list_required_documents) {
    gsap.from('#am-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_process = document.getElementById('am-consular-list-process');
  if (am_consular_list_process) {
    gsap.from('#am-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_timelines_deadlines = document.getElementById('am-consular-section-timelines-deadlines');
  if (am_consular_section_timelines_deadlines) {
    gsap.fromTo('#am-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_fees_costs = document.getElementById('am-consular-section-fees-costs');
  if (am_consular_section_fees_costs) {
    gsap.fromTo('#am-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_risks_common_mistakes = document.getElementById('am-consular-list-risks-common-mistakes');
  if (am_consular_list_risks_common_mistakes) {
    gsap.from('#am-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_diy_vs_professional_assistance = document.getElementById('am-consular-section-diy-vs-professional-assistance');
  if (am_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_amazonas_specific_context = document.getElementById('am-consular-section-amazonas-specific-context');
  if (am_consular_section_amazonas_specific_context) {
    gsap.fromTo('#am-consular-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_what_our_clients_say = document.getElementById('am-consular-section-what-our-clients-say');
  if (am_consular_section_what_our_clients_say) {
    gsap.fromTo('#am-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_frequently_asked_questions = document.getElementById('am-consular-section-frequently-asked-questions');
  if (am_consular_section_frequently_asked_questions) {
    gsap.fromTo('#am-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_international_support = document.getElementById('am-consular-section-international-support');
  if (am_consular_section_international_support) {
    gsap.fromTo('#am-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_our_credentials = document.getElementById('am-consular-list-our-credentials');
  if (am_consular_list_our_credentials) {
    gsap.from('#am-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_list_related_services = document.getElementById('am-consular-list-related-services');
  if (am_consular_list_related_services) {
    gsap.from('#am-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_youre_in_good_hands = document.getElementById('am-consular-section-youre-in-good-hands');
  if (am_consular_section_youre_in_good_hands) {
    gsap.fromTo('#am-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_consular_section_21 = document.getElementById('am-consular-section-21');
  if (am_consular_section_21) {
    gsap.fromTo('#am-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('am-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (am_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#am-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #am-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_quick_facts = document.getElementById('am-criminalrecords-list-quick-facts');
  if (am_criminalrecords_list_quick_facts) {
    gsap.from('#am-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_common_challenges_applicants_face = document.getElementById('am-criminalrecords-list-common-challenges-applicants-face');
  if (am_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#am-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('am-criminalrecords-list-how-we-solve-these-challenges');
  if (am_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#am-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_service_overview = document.getElementById('am-criminalrecords-section-service-overview');
  if (am_criminalrecords_section_service_overview) {
    gsap.fromTo('#am-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_form_who_is_this_service_for = document.getElementById('am-criminalrecords-form-who-is-this-service-for');
  if (am_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#am-criminalrecords-form-who-is-this-service-for input, #am-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_required_documents = document.getElementById('am-criminalrecords-list-required-documents');
  if (am_criminalrecords_list_required_documents) {
    gsap.from('#am-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_process = document.getElementById('am-criminalrecords-list-process');
  if (am_criminalrecords_list_process) {
    gsap.from('#am-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_timelines_deadlines = document.getElementById('am-criminalrecords-section-timelines-deadlines');
  if (am_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#am-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_fees_costs = document.getElementById('am-criminalrecords-section-fees-costs');
  if (am_criminalrecords_section_fees_costs) {
    gsap.fromTo('#am-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_risks_common_mistakes = document.getElementById('am-criminalrecords-list-risks-common-mistakes');
  if (am_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#am-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('am-criminalrecords-section-diy-vs-professional-assistance');
  if (am_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_amazonas_specific_context = document.getElementById('am-criminalrecords-section-amazonas-specific-context');
  if (am_criminalrecords_section_amazonas_specific_context) {
    gsap.fromTo('#am-criminalrecords-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_what_our_clients_say = document.getElementById('am-criminalrecords-section-what-our-clients-say');
  if (am_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#am-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_frequently_asked_questions = document.getElementById('am-criminalrecords-section-frequently-asked-questions');
  if (am_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#am-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_international_support = document.getElementById('am-criminalrecords-section-international-support');
  if (am_criminalrecords_section_international_support) {
    gsap.fromTo('#am-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_our_credentials = document.getElementById('am-criminalrecords-list-our-credentials');
  if (am_criminalrecords_list_our_credentials) {
    gsap.from('#am-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_list_related_services = document.getElementById('am-criminalrecords-list-related-services');
  if (am_criminalrecords_list_related_services) {
    gsap.from('#am-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_youre_in_good_hands = document.getElementById('am-criminalrecords-section-youre-in-good-hands');
  if (am_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#am-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_criminalrecords_section_21 = document.getElementById('am-criminalrecords-section-21');
  if (am_criminalrecords_section_21) {
    gsap.fromTo('#am-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_form_extradition_assistance_in_brazil = document.getElementById('am-extradition-form-extradition-assistance-in-brazil');
  if (am_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#am-extradition-form-extradition-assistance-in-brazil input, #am-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_quick_facts = document.getElementById('am-extradition-list-quick-facts');
  if (am_extradition_list_quick_facts) {
    gsap.from('#am-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_common_challenges_applicants_face = document.getElementById('am-extradition-list-common-challenges-applicants-face');
  if (am_extradition_list_common_challenges_applicants_face) {
    gsap.from('#am-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_how_we_solve_these_challenges = document.getElementById('am-extradition-list-how-we-solve-these-challenges');
  if (am_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#am-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_service_overview = document.getElementById('am-extradition-section-service-overview');
  if (am_extradition_section_service_overview) {
    gsap.fromTo('#am-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_form_who_is_this_service_for = document.getElementById('am-extradition-form-who-is-this-service-for');
  if (am_extradition_form_who_is_this_service_for) {
    gsap.from('#am-extradition-form-who-is-this-service-for input, #am-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_required_documents = document.getElementById('am-extradition-list-required-documents');
  if (am_extradition_list_required_documents) {
    gsap.from('#am-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_process = document.getElementById('am-extradition-list-process');
  if (am_extradition_list_process) {
    gsap.from('#am-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_timelines_deadlines = document.getElementById('am-extradition-section-timelines-deadlines');
  if (am_extradition_section_timelines_deadlines) {
    gsap.fromTo('#am-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_fees_costs = document.getElementById('am-extradition-section-fees-costs');
  if (am_extradition_section_fees_costs) {
    gsap.fromTo('#am-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_risks_common_mistakes = document.getElementById('am-extradition-list-risks-common-mistakes');
  if (am_extradition_list_risks_common_mistakes) {
    gsap.from('#am-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_diy_vs_professional_assistance = document.getElementById('am-extradition-section-diy-vs-professional-assistance');
  if (am_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_amazonas_specific_context = document.getElementById('am-extradition-section-amazonas-specific-context');
  if (am_extradition_section_amazonas_specific_context) {
    gsap.fromTo('#am-extradition-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_what_our_clients_say = document.getElementById('am-extradition-section-what-our-clients-say');
  if (am_extradition_section_what_our_clients_say) {
    gsap.fromTo('#am-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_frequently_asked_questions = document.getElementById('am-extradition-section-frequently-asked-questions');
  if (am_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#am-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_international_support = document.getElementById('am-extradition-section-international-support');
  if (am_extradition_section_international_support) {
    gsap.fromTo('#am-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_our_credentials = document.getElementById('am-extradition-list-our-credentials');
  if (am_extradition_list_our_credentials) {
    gsap.from('#am-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_list_related_services = document.getElementById('am-extradition-list-related-services');
  if (am_extradition_list_related_services) {
    gsap.from('#am-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_youre_in_good_hands = document.getElementById('am-extradition-section-youre-in-good-hands');
  if (am_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#am-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_extradition_section_21 = document.getElementById('am-extradition-section-21');
  if (am_extradition_section_21) {
    gsap.fromTo('#am-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_form_discover_the_north_amazon_and_beyond = document.getElementById('am-north-form-discover-the-north-amazon-and-beyond');
  if (am_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#am-north-form-discover-the-north-amazon-and-beyond input, #am-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_quick_facts = document.getElementById('am-north-list-quick-facts');
  if (am_north_list_quick_facts) {
    gsap.from('#am-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_common_challenges_applicants_face = document.getElementById('am-north-list-common-challenges-applicants-face');
  if (am_north_list_common_challenges_applicants_face) {
    gsap.from('#am-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_how_we_solve_these_challenges = document.getElementById('am-north-list-how-we-solve-these-challenges');
  if (am_north_list_how_we_solve_these_challenges) {
    gsap.from('#am-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_trip_overview = document.getElementById('am-north-section-trip-overview');
  if (am_north_section_trip_overview) {
    gsap.fromTo('#am-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_form_who_is_this_trip_for = document.getElementById('am-north-form-who-is-this-trip-for');
  if (am_north_form_who_is_this_trip_for) {
    gsap.from('#am-north-form-who-is-this-trip-for input, #am-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_required_documents = document.getElementById('am-north-list-required-documents');
  if (am_north_list_required_documents) {
    gsap.from('#am-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_booking_process = document.getElementById('am-north-list-booking-process');
  if (am_north_list_booking_process) {
    gsap.from('#am-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_timelines_deadlines = document.getElementById('am-north-section-timelines-deadlines');
  if (am_north_section_timelines_deadlines) {
    gsap.fromTo('#am-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_fees_costs = document.getElementById('am-north-section-fees-costs');
  if (am_north_section_fees_costs) {
    gsap.fromTo('#am-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_risks_common_mistakes = document.getElementById('am-north-list-risks-common-mistakes');
  if (am_north_list_risks_common_mistakes) {
    gsap.from('#am-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_diy_vs_professional_assistance = document.getElementById('am-north-section-diy-vs-professional-assistance');
  if (am_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_amazonas_specific_context = document.getElementById('am-north-section-amazonas-specific-context');
  if (am_north_section_amazonas_specific_context) {
    gsap.fromTo('#am-north-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_what_our_clients_say = document.getElementById('am-north-section-what-our-clients-say');
  if (am_north_section_what_our_clients_say) {
    gsap.fromTo('#am-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_frequently_asked_questions = document.getElementById('am-north-section-frequently-asked-questions');
  if (am_north_section_frequently_asked_questions) {
    gsap.fromTo('#am-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_international_support = document.getElementById('am-north-section-international-support');
  if (am_north_section_international_support) {
    gsap.fromTo('#am-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_our_credentials = document.getElementById('am-north-list-our-credentials');
  if (am_north_list_our_credentials) {
    gsap.from('#am-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_list_related_services = document.getElementById('am-north-list-related-services');
  if (am_north_list_related_services) {
    gsap.from('#am-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_youre_in_good_hands = document.getElementById('am-north-section-youre-in-good-hands');
  if (am_north_section_youre_in_good_hands) {
    gsap.fromTo('#am-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_north_section_21 = document.getElementById('am-north-section-21');
  if (am_north_section_21) {
    gsap.fromTo('#am-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('am-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (am_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#am-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #am-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_quick_facts = document.getElementById('am-centralwest-list-quick-facts');
  if (am_centralwest_list_quick_facts) {
    gsap.from('#am-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_common_challenges_applicants_face = document.getElementById('am-centralwest-list-common-challenges-applicants-face');
  if (am_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#am-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_how_we_solve_these_challenges = document.getElementById('am-centralwest-list-how-we-solve-these-challenges');
  if (am_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#am-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_trip_overview = document.getElementById('am-centralwest-section-trip-overview');
  if (am_centralwest_section_trip_overview) {
    gsap.fromTo('#am-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_form_who_is_this_trip_for = document.getElementById('am-centralwest-form-who-is-this-trip-for');
  if (am_centralwest_form_who_is_this_trip_for) {
    gsap.from('#am-centralwest-form-who-is-this-trip-for input, #am-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_required_documents = document.getElementById('am-centralwest-list-required-documents');
  if (am_centralwest_list_required_documents) {
    gsap.from('#am-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_booking_process = document.getElementById('am-centralwest-list-booking-process');
  if (am_centralwest_list_booking_process) {
    gsap.from('#am-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_timelines_deadlines = document.getElementById('am-centralwest-section-timelines-deadlines');
  if (am_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#am-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_fees_costs = document.getElementById('am-centralwest-section-fees-costs');
  if (am_centralwest_section_fees_costs) {
    gsap.fromTo('#am-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_risks_common_mistakes = document.getElementById('am-centralwest-list-risks-common-mistakes');
  if (am_centralwest_list_risks_common_mistakes) {
    gsap.from('#am-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_diy_vs_professional_assistance = document.getElementById('am-centralwest-section-diy-vs-professional-assistance');
  if (am_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_amazonas_specific_context = document.getElementById('am-centralwest-section-amazonas-specific-context');
  if (am_centralwest_section_amazonas_specific_context) {
    gsap.fromTo('#am-centralwest-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_what_our_clients_say = document.getElementById('am-centralwest-section-what-our-clients-say');
  if (am_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#am-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_frequently_asked_questions = document.getElementById('am-centralwest-section-frequently-asked-questions');
  if (am_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#am-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_international_support = document.getElementById('am-centralwest-section-international-support');
  if (am_centralwest_section_international_support) {
    gsap.fromTo('#am-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_our_credentials = document.getElementById('am-centralwest-list-our-credentials');
  if (am_centralwest_list_our_credentials) {
    gsap.from('#am-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_list_related_services = document.getElementById('am-centralwest-list-related-services');
  if (am_centralwest_list_related_services) {
    gsap.from('#am-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_youre_in_good_hands = document.getElementById('am-centralwest-section-youre-in-good-hands');
  if (am_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#am-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_centralwest_section_21 = document.getElementById('am-centralwest-section-21');
  if (am_centralwest_section_21) {
    gsap.fromTo('#am-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('am-southeast-form-dynamic-southeast-cities-and-history');
  if (am_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#am-southeast-form-dynamic-southeast-cities-and-history input, #am-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_quick_facts = document.getElementById('am-southeast-list-quick-facts');
  if (am_southeast_list_quick_facts) {
    gsap.from('#am-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_common_challenges_applicants_face = document.getElementById('am-southeast-list-common-challenges-applicants-face');
  if (am_southeast_list_common_challenges_applicants_face) {
    gsap.from('#am-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_how_we_solve_these_challenges = document.getElementById('am-southeast-list-how-we-solve-these-challenges');
  if (am_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#am-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_trip_overview = document.getElementById('am-southeast-section-trip-overview');
  if (am_southeast_section_trip_overview) {
    gsap.fromTo('#am-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_form_who_is_this_trip_for = document.getElementById('am-southeast-form-who-is-this-trip-for');
  if (am_southeast_form_who_is_this_trip_for) {
    gsap.from('#am-southeast-form-who-is-this-trip-for input, #am-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_required_documents = document.getElementById('am-southeast-list-required-documents');
  if (am_southeast_list_required_documents) {
    gsap.from('#am-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_booking_process = document.getElementById('am-southeast-list-booking-process');
  if (am_southeast_list_booking_process) {
    gsap.from('#am-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_timelines_deadlines = document.getElementById('am-southeast-section-timelines-deadlines');
  if (am_southeast_section_timelines_deadlines) {
    gsap.fromTo('#am-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_fees_costs = document.getElementById('am-southeast-section-fees-costs');
  if (am_southeast_section_fees_costs) {
    gsap.fromTo('#am-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_risks_common_mistakes = document.getElementById('am-southeast-list-risks-common-mistakes');
  if (am_southeast_list_risks_common_mistakes) {
    gsap.from('#am-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_diy_vs_professional_assistance = document.getElementById('am-southeast-section-diy-vs-professional-assistance');
  if (am_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_amazonas_specific_context = document.getElementById('am-southeast-section-amazonas-specific-context');
  if (am_southeast_section_amazonas_specific_context) {
    gsap.fromTo('#am-southeast-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_what_our_clients_say = document.getElementById('am-southeast-section-what-our-clients-say');
  if (am_southeast_section_what_our_clients_say) {
    gsap.fromTo('#am-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_frequently_asked_questions = document.getElementById('am-southeast-section-frequently-asked-questions');
  if (am_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#am-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_international_support = document.getElementById('am-southeast-section-international-support');
  if (am_southeast_section_international_support) {
    gsap.fromTo('#am-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_our_credentials = document.getElementById('am-southeast-list-our-credentials');
  if (am_southeast_list_our_credentials) {
    gsap.from('#am-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_list_related_services = document.getElementById('am-southeast-list-related-services');
  if (am_southeast_list_related_services) {
    gsap.from('#am-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_youre_in_good_hands = document.getElementById('am-southeast-section-youre-in-good-hands');
  if (am_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#am-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_southeast_section_21 = document.getElementById('am-southeast-section-21');
  if (am_southeast_section_21) {
    gsap.fromTo('#am-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('am-northeast-form-vibrant-northeast-beaches-and-culture');
  if (am_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#am-northeast-form-vibrant-northeast-beaches-and-culture input, #am-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_quick_facts = document.getElementById('am-northeast-list-quick-facts');
  if (am_northeast_list_quick_facts) {
    gsap.from('#am-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_common_challenges_applicants_face = document.getElementById('am-northeast-list-common-challenges-applicants-face');
  if (am_northeast_list_common_challenges_applicants_face) {
    gsap.from('#am-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_how_we_solve_these_challenges = document.getElementById('am-northeast-list-how-we-solve-these-challenges');
  if (am_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#am-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_trip_overview = document.getElementById('am-northeast-section-trip-overview');
  if (am_northeast_section_trip_overview) {
    gsap.fromTo('#am-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_form_who_is_this_trip_for = document.getElementById('am-northeast-form-who-is-this-trip-for');
  if (am_northeast_form_who_is_this_trip_for) {
    gsap.from('#am-northeast-form-who-is-this-trip-for input, #am-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_required_documents = document.getElementById('am-northeast-list-required-documents');
  if (am_northeast_list_required_documents) {
    gsap.from('#am-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_booking_process = document.getElementById('am-northeast-list-booking-process');
  if (am_northeast_list_booking_process) {
    gsap.from('#am-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_timelines_deadlines = document.getElementById('am-northeast-section-timelines-deadlines');
  if (am_northeast_section_timelines_deadlines) {
    gsap.fromTo('#am-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_fees_costs = document.getElementById('am-northeast-section-fees-costs');
  if (am_northeast_section_fees_costs) {
    gsap.fromTo('#am-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_risks_common_mistakes = document.getElementById('am-northeast-list-risks-common-mistakes');
  if (am_northeast_list_risks_common_mistakes) {
    gsap.from('#am-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_diy_vs_professional_assistance = document.getElementById('am-northeast-section-diy-vs-professional-assistance');
  if (am_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_amazonas_specific_context = document.getElementById('am-northeast-section-amazonas-specific-context');
  if (am_northeast_section_amazonas_specific_context) {
    gsap.fromTo('#am-northeast-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_what_our_clients_say = document.getElementById('am-northeast-section-what-our-clients-say');
  if (am_northeast_section_what_our_clients_say) {
    gsap.fromTo('#am-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_frequently_asked_questions = document.getElementById('am-northeast-section-frequently-asked-questions');
  if (am_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#am-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_international_support = document.getElementById('am-northeast-section-international-support');
  if (am_northeast_section_international_support) {
    gsap.fromTo('#am-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_our_credentials = document.getElementById('am-northeast-list-our-credentials');
  if (am_northeast_list_our_credentials) {
    gsap.from('#am-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_list_related_services = document.getElementById('am-northeast-list-related-services');
  if (am_northeast_list_related_services) {
    gsap.from('#am-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_youre_in_good_hands = document.getElementById('am-northeast-section-youre-in-good-hands');
  if (am_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#am-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_northeast_section_21 = document.getElementById('am-northeast-section-21');
  if (am_northeast_section_21) {
    gsap.fromTo('#am-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_form_charming_south_wine_and_gauchos = document.getElementById('am-south-form-charming-south-wine-and-gauchos');
  if (am_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#am-south-form-charming-south-wine-and-gauchos input, #am-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_quick_facts = document.getElementById('am-south-list-quick-facts');
  if (am_south_list_quick_facts) {
    gsap.from('#am-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_common_challenges_applicants_face = document.getElementById('am-south-list-common-challenges-applicants-face');
  if (am_south_list_common_challenges_applicants_face) {
    gsap.from('#am-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_how_we_solve_these_challenges = document.getElementById('am-south-list-how-we-solve-these-challenges');
  if (am_south_list_how_we_solve_these_challenges) {
    gsap.from('#am-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_trip_overview = document.getElementById('am-south-section-trip-overview');
  if (am_south_section_trip_overview) {
    gsap.fromTo('#am-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_form_who_is_this_trip_for = document.getElementById('am-south-form-who-is-this-trip-for');
  if (am_south_form_who_is_this_trip_for) {
    gsap.from('#am-south-form-who-is-this-trip-for input, #am-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_required_documents = document.getElementById('am-south-list-required-documents');
  if (am_south_list_required_documents) {
    gsap.from('#am-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_booking_process = document.getElementById('am-south-list-booking-process');
  if (am_south_list_booking_process) {
    gsap.from('#am-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_timelines_deadlines = document.getElementById('am-south-section-timelines-deadlines');
  if (am_south_section_timelines_deadlines) {
    gsap.fromTo('#am-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_fees_costs = document.getElementById('am-south-section-fees-costs');
  if (am_south_section_fees_costs) {
    gsap.fromTo('#am-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_risks_common_mistakes = document.getElementById('am-south-list-risks-common-mistakes');
  if (am_south_list_risks_common_mistakes) {
    gsap.from('#am-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_diy_vs_professional_assistance = document.getElementById('am-south-section-diy-vs-professional-assistance');
  if (am_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#am-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_amazonas_specific_context = document.getElementById('am-south-section-amazonas-specific-context');
  if (am_south_section_amazonas_specific_context) {
    gsap.fromTo('#am-south-section-amazonas-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_what_our_clients_say = document.getElementById('am-south-section-what-our-clients-say');
  if (am_south_section_what_our_clients_say) {
    gsap.fromTo('#am-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_frequently_asked_questions = document.getElementById('am-south-section-frequently-asked-questions');
  if (am_south_section_frequently_asked_questions) {
    gsap.fromTo('#am-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_international_support = document.getElementById('am-south-section-international-support');
  if (am_south_section_international_support) {
    gsap.fromTo('#am-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_our_credentials = document.getElementById('am-south-list-our-credentials');
  if (am_south_list_our_credentials) {
    gsap.from('#am-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_list_related_services = document.getElementById('am-south-list-related-services');
  if (am_south_list_related_services) {
    gsap.from('#am-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_youre_in_good_hands = document.getElementById('am-south-section-youre-in-good-hands');
  if (am_south_section_youre_in_good_hands) {
    gsap.fromTo('#am-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

  const am_south_section_21 = document.getElementById('am-south-section-21');
  if (am_south_section_21) {
    gsap.fromTo('#am-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'bounce.inOut'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
