// The Branch — Adirondack Lodge :: House Rules content
// Content lives here; House Rules.html holds the framework + render.
window.RULES = {
  wifi: { network: "The Branch", password: "adklodge" },

  intro: "All guests, please read these house rules to keep everyone safe and the property in great shape.",

  sections: [
    {
      id: "notes", num: "01", title: "Important Notes",
      rules: [
        "Follow all signage throughout the lodge/property.",
        { text: "Toilet paper is the only manufactured product that can go into the toilets. NO wipes (even \u201Cflushable\u201D ones), diapers, tampons, etc, which will cause the septic system to fail. The septic system is a large and expensive underground system.", highlight: true },
        { text: "The primary thermostat (for heat and AC) is in a holder that is opposite the door to the back deck. To change settings, remove it from its holder and point at the unit (above door). Return the thermostat to its holder after use. Keep all windows & exterior doors closed while in use. Keep the ceiling fan on at all times.", note: "All other thermostats are for heat only. For energy conservation, thermostat ranges are managed automatically. Heating is capped at a maximum of 74°F, and cooling is set to a minimum of 68°F." },
        "No smoking or vaping inside.",
        "No pets.",
        "Do not use the countertops and kitchen cart as a cutting board. Use provided cutting boards.",
        "All trash & recycling go in the shed. The key to the shed is on the hook by the front door. Always keep closed & locked (prevent unwanted animals) and return the key to the hook.",
        "Giant Jenga is in the shed below the workbench. It takes two people to move it. Play on the lawn and otherwise away from the lodge as falling pieces will damage the lodge. Put it back after use (to avoid weather and because our cleaner cannot move it alone).",
        "As needed, please use provided shovels and ice melt to clear the front steps."
      ]
    },
    {
      id: "fire", num: "02", title: "Fire Safety",
      rules: [
        "No open flames except in the designated fireplaces. Never leave a fire unattended. Always fully extinguish after use.",
        { text: "The inside fireplace's controls are on its back. To turn it on, set the \u201CBurner\u201D control to \u201CON\u201D. To turn it off, set control to \u201CTSTAT\u201D. Do not open the panel at the base of the fireplace. Keep windows closed while in use. <span class='mark-hl'>Do not use it overnight.</span>", note: "When not in use, there is a small pilot light that remains on; this is normal." },
        "After using the grill and/or propane fire pit, turn off the valve to the propane tank."
      ]
    },
    {
      id: "spa", num: "03", title: "Hot Tub & Sauna",
      rules: [
        "Minors younger than 16 must be accompanied by an adult when in the sauna or hot tub.",
        { text: "Please shower before using the hot tub. Please unhook <u>ALL</u> four buckles before removing the cover. After use, turn off jets, then close/secure the cover.", note: "The jets occasionally cycle on while the hot tub is not in use; this is normal." },
        "After 2 hot tub uses, you\u2019ll want to add more chlorine. The chlorine and measuring spoons are next to the laundry detergent in the laundry room. Add 2 teaspoons (<u>NOT</u> tablespoons) above the filter area while the jets are on high. Let the jets run for 2 minutes. Then turn jets off and cover the hot tub back up.",
        "Either wear a swimming suit or sit on a towel while using the sauna.",
        { text: "Depending on the outside temp, the sauna generally takes 30\u201350 minutes to heat up.", link: { url: "https://youtu.be/jHPX_FBsPj8?si=CD_YlfpjDoeB9VM5", label: "Video on how to operate the sauna heater" } },
        "Fill the water bucket up 1/3 of the way (a little water goes a long way). When ladling water onto the sauna heater rocks, hold the ladle by its end to avoid steam from burning your hand. If you see any water dripping/pooling below the sauna heater, you\u2019re using too much water.",
        "After use: turn off the sauna heater; empty the water bucket outside; then place the bucket back inside of the sauna.",
        "Secure the exterior sauna door with the bungee cord."
      ]
    },
    {
      id: "checkout", num: "04", title: "Checkout", meta: "by 11:00 am",
      checklist: true,
      rules: [
        "Checkout is no later than 11:00 am. Our cleaner typically comes right at 11:00 am.",
        "Put all used sheets, towels and robes into the laundry baskets (in bedroom closets and upstairs bathroom).",
        "Run the dishwasher to clean all dirty dishes.",
        "Take all of your food with you (don\u2019t forget items in the freezer).",
        "Put all trash and recycling into the shed.",
        "Turn off AC. In cold months, set all thermostats to 62.",
        "Turn off all lights.",
        "Lock all windows and doors (don\u2019t forget the shed door)."
      ]
    }
  ]
};
