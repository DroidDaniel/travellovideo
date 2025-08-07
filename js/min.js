$(document).ready(function () {
    $("#btn_submit").click(function (e) {
      e.preventDefault();

      let isEmpty = false;

      $(".input-field").each(function () {
        if ($(this).val().trim() === "") {
          $(this).addClass("highlight");
          isEmpty = true;
        } else {
          $(this).removeClass("highlight");
        }
      });

      if (isEmpty) {
        $(".error_msg").show();
        $(".success_msg").hide();
        return;
      }

      $(".error_msg").hide();

      // Submit the form using iframe target
      $("#sp_form")[0].submit();

      $(".success_msg").show();
      $("#sp_form")[0].reset();
    });

    // modal open

      $(".card-btn").on("click", function () {
    const card = $(this).closest(".card");
    const bg = card.css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    const title = card.find(".card-title").text().trim();

    // Descriptions map
    const descriptions = {
      "Dubai, UAE": "City of luxury, desert adventures, shopping festivals.",
      "Singapore": "Family-friendly, clean, and modern with attractions like Sentosa & Universal Studios.",
      "Thailand": "(Bangkok, Phuket, Krabi) Beaches, nightlife, temples, and budget-friendly.",
      "Malaysia": "(Kuala Lumpur, Langkawi) Culture, islands, and food.",
      "Maldives": "Luxury water villas, honeymoon paradise.",
      "Bali, Indonesia": "Tropical vibes, rice terraces, temples.",
      "Europe": "(Switzerland, Paris, Italy) Romantic tours, scenic landscapes, culture.",
      "Turkey": "A perfect mix of Europe and Asia with unique history and hot air balloon rides.",
      "Vietnam": "Affordable, scenic, and culturally rich.",
      "Australia": "(Sydney, Melbourne, Gold Coast) Great for family and adventure travel.",
      "Kashmir": "Heaven on Earth, snow, shikara rides, Gulmarg.",
      "Leh-Ladakh": "Road trips, bike tours, monasteries, and mountains.",
      "Rajasthan": "(Jaipur, Udaipur, Jaisalmer) Palaces, forts, desert safaris.",
      "Kerala": "(Munnar, Alleppey, Wayanad) Backwaters, hill stations, ayurveda.",
      "Goa": "Beaches, nightlife, Portuguese charm.",
      "Andaman": "(Andaman & Nicobar Islands) Tropical islands, scuba diving, clear waters.",
      "Himachal Pradesh": "(Manali, Shimla, Spiti) Romantic tours, scenic landscapes, culture.",
      "Northeast India": "(Meghalaya, Sikkim, Assam) Hidden gems with raw beauty.",
      "Ooty & Kodaikanal": "Southern hill stations with cool climates.",
      "Rameshwaram": "(Rameshwaram, Varanasi, Tirupati) Spiritual & cultural heritage tours."
    };

    const fullDesc = descriptions[title] || "No description available.";

    // Extract optional subtitle in parentheses
    let subtitle = "";
    let mainDesc = fullDesc;

    const match = fullDesc.match(/^\((.*?)\)\s*(.*)/);
    if (match) {
      subtitle = `(${match[1]})`;
      mainDesc = match[2];
    }

    // Update modal contents
    $("#modalImg").attr("src", bg);
    $("#modalTitle").text(title);
    $("#modalSubtitle").text(subtitle); // Make sure this element exists in your modal HTML
    $("#modalDesc").text(mainDesc);

    $("#cardModal").fadeIn();
  });

  // Close modal handlers
  $(".modal-close, .custom-modal").on("click", function () {
    $("#cardModal").fadeOut();
  });

  $(".custom-modal-content").on("click", function (e) {
    e.stopPropagation(); // Prevent modal close on inner click
  });

  });