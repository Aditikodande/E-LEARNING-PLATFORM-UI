// Script to handle Profile Page functionality

// Check if the profile page is loaded
if (window.location.pathname.includes("profile.html")) {
  const profileForm = document.getElementById("profile-form");

  // Load profile data from localStorage when the page loads
  function loadProfileData() {
    const savedProfile = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfile) {
      document.getElementById("name").value = savedProfile.name || "";
      document.getElementById("address").value = savedProfile.address || "";
      document.getElementById("phone").value = savedProfile.phone || "";
      document.getElementById("dob").value = savedProfile.dob || "";
      document.getElementById("gender").value = savedProfile.gender || "";
      document.getElementById("profile-type").value = savedProfile.profileType || "";
    }
  }

  // Save profile data to localStorage when the form is submitted
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const profileData = {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      profileType: document.getElementById("profile-type").value,
    };

    // Save the data to localStorage
    localStorage.setItem("profileData", JSON.stringify(profileData));

    // Show a success message
    alert("Profile saved successfully!");
  });

  // Load the data when the page loads
  loadProfileData();
}
