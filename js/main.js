const featuredPets = document.getElementById("featured-pets");

async function getPets() {

    try {

        const response = await fetch("http://localhost:3000/pets");

        const pets = await response.json();

        displayFeaturedPets(pets);

    } catch (error) {

        console.log("Error loading pets:", error);

    }

}


function displayFeaturedPets(pets) {

    featuredPets.innerHTML = "";

    const featured = pets.slice(0, 3);

    featured.forEach(function(pet) {

        const card = document.createElement("div");

        card.classList.add("pet-card");

        card.innerHTML = `

            <div class="pet-image">

                <img
                    src="${pet.image}"
                    alt="${pet.name}"
                >

                <button class="favorite-btn">
                    ♡
                </button>

            </div>


            <div class="pet-info">

                <div class="pet-name">

                    <h3>${pet.name}</h3>

                    <span>${pet.gender}</span>

                </div>

                <p class="pet-breed">
                    ${pet.breed}
                </p>

                <div class="pet-details">

                    <span>
                        ${pet.age} years
                    </span>

                    <span>
                        📍 ${pet.location}
                    </span>

                </div>

                <a
                    href="pet-details.html?id=${pet.id}"
                    class="btn btn-card"
                >
                    View Pet
                </a>

            </div>

        `;

        featuredPets.appendChild(card);

    });

}


getPets();