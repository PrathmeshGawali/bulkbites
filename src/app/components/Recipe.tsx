'use client';
import React from 'react';

const Recipe = () => {
    const recipes = [
      { name: "adobo", emoji: "🌶️" },
      { name: "ambrosia", emoji: "🍑" },
      { name: "apple_pie", emoji: "🥧" },
      { name: "apple_turnover", emoji: "🍎" },
      { name: "applesauce", emoji: "🍎🥣" },
      { name: "baby_back_rib", emoji: "🍖" },
      { name: "baby_back_ribs", emoji: "🍖" },
      { name: "bacon_and_eggs", emoji: "🥓🍳" },
      { name: "bacon_lettuce_tomato_sandwich", emoji: "🥓🥬🍅🥪" },
      { name: "baked_alaska", emoji: "🍨🔥" },
      { name: "baklava", emoji: "🍯" },
      { name: "barbecued_spareribs", emoji: "🍖🔥" },
      { name: "barbecued_wing", emoji: "🍗🔥" },
      { name: "beef_bourguignonne", emoji: "🍷" },
      { name: "beef_carpaccio", emoji: "🥩" },
      { name: "beef_stroganoff", emoji: "🥘" },
      { name: "beef_tartare", emoji: "🐄" },
      { name: "beef_wellington", emoji: "🥩" },
      { name: "beet_salad", emoji: "🍠" },
      { name: "beignet", emoji: "🍩" },
      { name: "beignets", emoji: "🍩" },
      { name: "bibimbap", emoji: "🥢" },
      { name: "biryani", emoji: "🍚" },
      { name: "blancmange", emoji: "🥛" },
      { name: "blt_sandwich", emoji: "🥓🥬🍅🥪" },
      { name: "boiled_egg", emoji: "🥚" },
      { name: "boston_cream_pie", emoji: "🍮" },
      { name: "bread_pudding", emoji: "🍮" },
      { name: "breakfast_burrito", emoji: "🌯" },
      { name: "brisket", emoji: "�" },
      { name: "bubble_and_squeak", emoji: "🥔🥬🍳" },
      { name: "buffalo_wing", emoji: "🍗🌶️" },
      { name: "bruschetta", emoji: "🍅" },
      { name: "burrito", emoji: "🌯" },
      { name: "caesar_salad", emoji: "🥗🧀" },
      { name: "cannelloni", emoji: "🍝" },
      { name: "cannoli", emoji: "🍡" },
      { name: "caprese_salad", emoji: "🧀🍅" },
      { name: "carbonnade_flamande", emoji: "🍖" },
      { name: "carrot_cake", emoji: "🥕🍰" },
      { name: "casserole", emoji: "🍲" },
      { name: "ceviche", emoji: "🍋" },
      { name: "cheese_plate", emoji: "🧀🍇" },
      { name: "cheesecake", emoji: "🍰" },
      { name: "chicken_cordon_bleu", emoji: "🧀" },
      { name: "chicken_curry", emoji: "🍛" },
      { name: "chicken_kiev", emoji: "�" },
      { name: "chicken_marengo", emoji: "🍗🍅🥘" },
      { name: "chicken_provencale", emoji: "🍗🌿🍅" },
      { name: "chicken_quesadilla", emoji: "🐔🧀🌮" },
      { name: "chicken_wing", emoji: "🍗" },
      { name: "chicken_wings", emoji: "🍗" },
      { name: "chiffon_cake", emoji: "🍰" },
      { name: "chili", emoji: "🌶️🥘" },
      { name: "chocolate_cake", emoji: "🍫🍰" },
      { name: "chocolate_mousse", emoji: "�" },
      { name: "chop_suey", emoji: "🥢" },
      { name: "chow_mein", emoji: "🍜" },
      { name: "churro", emoji: "🍩✨" },
      { name: "churros", emoji: "🎪" },
      { name: "clam_chowder", emoji: "🥣" },
      { name: "club_sandwich", emoji: "🥪" },
      { name: "coconut_cake", emoji: "🥥" },
      { name: "coffee_cake", emoji: "☕" },
      { name: "compote", emoji: "🍓🥣" },
      { name: "confit", emoji: "🦆🍽️" },
      { name: "coq_au_vin", emoji: "🍷" },
      { name: "coquilles_saint_jacques", emoji: "🐚" },
      { name: "cottage_pie", emoji: "🥧🥩" },
      { name: "couscous", emoji: "🍛" },
      { name: "crab_cake", emoji: "🦀🥙" },
      { name: "crab_cakes", emoji: "🦀" },
      { name: "creme_brulee", emoji: "🔥" },
      { name: "croque_madame", emoji: "🧀" },
      { name: "croquette", emoji: "�" },
      { name: "cruller", emoji: "🌀" },
      { name: "crumb_cake", emoji: "🍰" },
      { name: "crumpet", emoji: "🥯☕" },
      { name: "cup_cakes", emoji: "�🧁" },
      { name: "cupcake", emoji: "🧁" },
      { name: "custard", emoji: "🍮" },
      { name: "deviled_egg", emoji: "🥚🔥" },
      { name: "deviled_eggs", emoji: "🥚" },
      { name: "dolmas", emoji: "🍇" },
      { name: "donut", emoji: "🍩" },
      { name: "donuts", emoji: "🍩" },
      { name: "dumpling", emoji: "🥟" },
      { name: "dumplings", emoji: "🥟" },
      { name: "eccles_cake", emoji: "🍇" },
      { name: "edamame", emoji: "🟢" },
      { name: "egg_roll", emoji: "🌯" },
      { name: "enchilada", emoji: "🌯🌶️" },
      { name: "entrecote", emoji: "🥩🍷" },
      { name: "escargot", emoji: "🐌🍽️" },
      { name: "escargots", emoji: "🐌" },
      { name: "falafel", emoji: "🌱" },
      { name: "farfalle", emoji: "🎀🍝" },
      { name: "fettuccine", emoji: "🍝" },
      { name: "filet_mignon", emoji: "🥩" },
      { name: "fish_and_chips", emoji: "🐟🍟" },
      { name: "fish_stick", emoji: "🐟" },
      { name: "flan", emoji: "🍮" },
      { name: "foie_gras", emoji: "🦆" },
      { name: "fondue", emoji: "🍫🫕" },
      { name: "french_fries", emoji: "🍟" },
      { name: "french_onion_soup", emoji: "🧅" },
      { name: "french_toast", emoji: "🍞" },
      { name: "fried_calamari", emoji: "🦑🍤" },
      { name: "fried_egg", emoji: "🍳" },
      { name: "fried_rice", emoji: "🍚" },
      { name: "frittata", emoji: "🍳🧀" },
      { name: "fritter", emoji: "🍘" },
      { name: "frozen_yogurt", emoji: "🍨" },
      { name: "fruitcake", emoji: "🎄" },
      { name: "galantine", emoji: "🍗🎀" },
      { name: "garlic_bread", emoji: "🧄" },
      { name: "gingerbread", emoji: "🧑‍🎄" },
      { name: "gnocchi", emoji: "🥔" },
      { name: "greek_salad", emoji: "🥗" },
      { name: "grilled_cheese_sandwich", emoji: "🧀" },
      { name: "grilled_salmon", emoji: "🐟" },
      { name: "guacamole", emoji: "🥑" },
      { name: "gyoza", emoji: "🥟🍱" },
      { name: "gyro", emoji: "🥙" },
      { name: "haggis", emoji: "🐑🥩" },
      { name: "ham_and_eggs", emoji: "🍖🍳" },
      { name: "ham_sandwich", emoji: "🥪🐖" },
      { name: "hamburger", emoji: "🍔" },
      { name: "hot_and_sour_soup", emoji: "🥣" },
      { name: "hot_dog", emoji: "🌭" },
      { name: "huevos_rancheros", emoji: "🍳" },
      { name: "huitre", emoji: "🦪" },
      { name: "hummus", emoji: "🧆" },
      { name: "ice_cream", emoji: "🍦" },
      { name: "jambalaya", emoji: "🥘" },
      { name: "jerky", emoji: "🐄🍖" },
      { name: "kabob", emoji: "🍢" },
      { name: "kedgeree", emoji: "🍚" },
      { name: "knish", emoji: "🥟🥔" },
      { name: "lasagna", emoji: "🧀" },
      { name: "linguine", emoji: "🍝" },
      { name: "lobster_bisque", emoji: "🦞" },
      { name: "lobster_roll_sandwich", emoji: "🥪" },
      { name: "lobster_thermidor", emoji: "🦞" },
      { name: "lutefisk", emoji: "🐟🇳🇴" },
      { name: "macaron", emoji: "🍬🇫🇷" },
      { name: "macaroni_and_cheese", emoji: "🧀" },
      { name: "macarons", emoji: "🎀" },
      { name: "manicotti", emoji: "🧀" },
      { name: "marble_cake", emoji: "🎂" },
      { name: "matzo_ball", emoji: "🍲" },
      { name: "meatball", emoji: "🍝" },
      { name: "miso_soup", emoji: "🍵" },
      { name: "mostaccioli", emoji: "🍝🧀" },
      { name: "moo_goo_gai_pan", emoji: "🍗🥦🍚" },
      { name: "moussaka", emoji: "🥘🍆" },
      { name: "mousse", emoji: "�" },
      { name: "mussel", emoji: "🦪" },
      { name: "mussels", emoji: "🦪🧄" },
      { name: "nacho", emoji: "🧀🌽" },
      { name: "nachos", emoji: "🧀" },
      { name: "omelette", emoji: "🍳" },
      { name: "onion_rings", emoji: "🧅" },
      { name: "orzo", emoji: "🍚🍝" },
      { name: "osso_buco", emoji: "🥩🍷" },
      { name: "oyster", emoji: "🦪🍋" },
      { name: "oysters", emoji: "🦪" },
      { name: "pad_thai", emoji: "🍜" },
      { name: "paella", emoji: "🥘" },
      { name: "pancake", emoji: "🥞" },
      { name: "pancakes", emoji: "🥞" },
      { name: "panna_cotta", emoji: "🥛" },
      { name: "pate", emoji: "🍞🦆" },
      { name: "pavlova", emoji: "🦢" },
      { name: "peach_melba", emoji: "🍑" },
      { name: "peking_duck", emoji: "🦆" },
      { name: "penne", emoji: "�" },
      { name: "pepper_steak", emoji: "🥩🌶️" },
      { name: "pho", emoji: "🍜" },
      { name: "pilaf", emoji: "🍚🥘" },
      { name: "pirogi", emoji: "🥟🧅" },
      { name: "pizza", emoji: "🍕" },
      { name: "poached_egg", emoji: "🥚💧" },
      { name: "poi", emoji: "🌺🥣" },
      { name: "pork_chop", emoji: "🐖" },
      { name: "porridge", emoji: "🥣" },
      { name: "potpie", emoji: "🥧🍗" },
      { name: "pound_cake", emoji: "🏋️" },
      { name: "poutine", emoji: "🧀🍟" },
      { name: "prime_rib", emoji: "🥩" },
      { name: "profiterole", emoji: "�" },
      { name: "pulled_pork_sandwich", emoji: "🥪" },
      { name: "ramen", emoji: "🍜" },
      { name: "ravioli", emoji: "🥟" },
      { name: "red_velvet_cake", emoji: "🎂" },
      { name: "reuben", emoji: "🥪" },
      { name: "rigatoni", emoji: "🍝" },
      { name: "risotto", emoji: "🍚" },
      { name: "rissole", emoji: "🥩🥟" },
      { name: "rock_cake", emoji: "🪨" },
      { name: "roulade", emoji: "�" },
      { name: "rugulah", emoji: "🌀" },
      { name: "salisbury_steak", emoji: "🥩" },
      { name: "samosa", emoji: "🔺" },
      { name: "sandwich", emoji: "🥪" },
      { name: "sashimi", emoji: "🍣" },
      { name: "sauerkraut", emoji: "🥬🇩🇪" },
      { name: "sauerbraten", emoji: "🍖" },
      { name: "sausage_roll", emoji: "🌭" },
      { name: "savarin", emoji: "🍩" },
      { name: "scallop", emoji: "🦪🔥" },
      { name: "scallops", emoji: "�" },
      { name: "scampi", emoji: "🦐" },
      { name: "schnitzel", emoji: "🍋" },
      { name: "scotch_egg", emoji: "🥚🥩" },
      { name: "scrambled_eggs", emoji: "🍳" },
      { name: "scrapple", emoji: "🐷🍳" },
      { name: "seaweed_salad", emoji: "🌊" },
      { name: "shirred_egg", emoji: "🥚" },
      { name: "shrimp_and_grits", emoji: "🦐" },
      { name: "sloppy_joe", emoji: "🥪🍖" },
      { name: "souffle", emoji: "🍰🎈" },
      { name: "spaghetti_bolognese", emoji: "🍝" },
      { name: "spaghetti_carbonara", emoji: "🥓" },
      { name: "sponge_cake", emoji: "🧽" },
      { name: "spring_roll", emoji: "🥢🥬" },
      { name: "spring_rolls", emoji: "🌯" },
      { name: "steak", emoji: "🥩" },
      { name: "steak_au_poivre", emoji: "🥩🌶️" },
      { name: "streusel", emoji: "🍪" },
      { name: "strudel", emoji: "🍎" },
      { name: "stuffed_cabbage", emoji: "🥬🥩" },
      { name: "stuffed_peppers", emoji: "🌶️" },
      { name: "stuffed_tomato", emoji: "🍅🍚" },
      { name: "succotash", emoji: "🌽" },
      { name: "sukiyaki", emoji: "🥩🍲" },
      { name: "sushi", emoji: "�" },
      { name: "syllabub", emoji: "🥛" },
      { name: "taco", emoji: "🌮" },
      { name: "tacos", emoji: "🌮" },
      { name: "takoyaki", emoji: "🐙" },
      { name: "tamale", emoji: "🌽" },
      { name: "tamale_pie", emoji: "🌽🥧" },
      { name: "tapenade", emoji: "🫒🥖" },
      { name: "tagliatelle", emoji: "🍝" },
      { name: "tempura", emoji: "🍤" },
      { name: "tenderloin", emoji: "🥩👑" },
      { name: "terrine", emoji: "🍖🍞" },
      { name: "tetrazzini", emoji: "�" },
      { name: "tiramisu", emoji: "☕" },
      { name: "toad_in_the_hole", emoji: "🐸" },
      { name: "torte", emoji: "🎂" },
      { name: "tortellini", emoji: "🍝🧀" },
      { name: "tostada", emoji: "🫓🥑" },
      { name: "tuna_tartare", emoji: "🍣" },
      { name: "upside_down_cake", emoji: "🙃" },
      { name: "veal_cordon_bleu", emoji: "�" },
      { name: "vermicelli", emoji: "🍜" },
      { name: "victoria_sandwich", emoji: "👑" },
      { name: "vol_au_vent", emoji: "🥐🎩" },
      { name: "waffle", emoji: "🧇" },
      { name: "waffles", emoji: "🧇" },
      { name: "welsh_rarebit", emoji: "🧀🍞🔥" },
      { name: "wonton", emoji: "🥟" },
      { name: "ziti", emoji: "🍝" }
    ];
      const [searchTerm, setSearchTerm] = React.useState("");
      const [isOpen, setIsOpen] = React.useState(false);
      const dropdownRef = React.useRef<HTMLDivElement>(null);
    
      const filteredRecipes = recipes
        .filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));
    
      React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    
      return (
        <section className="w-full py-20 px-4 flex justify-center bg-white">
          <div className="bg-black text-white rounded-2xl shadow-xl max-w-3xl w-full px-6 py-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
              Available Recipes
            </h2>
            <p className="text-base sm:text-lg text-sky-200 mb-8">
              Version 1 : Dished model is trained to recognize
            </p>
    
            {/* Searchable Dropdown */}
            <div className="relative max-w-md mx-auto" ref={dropdownRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                />
                <button
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "↑" : "↓"}
                </button>
              </div>
    
              {isOpen && (
                <div className="absolute z-10 mt-1 w-full max-h-96 overflow-y-auto bg-white text-black rounded-lg shadow-lg">
                  {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                      <div
                        key={recipe.name}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => {
                          setSearchTerm(recipe.name);
                          setIsOpen(false);
                        }}
                      >
                        <span className="mr-2">{recipe.emoji}</span>
                        <span className="capitalize">
                          {recipe.name.replace(/_/g, " ")}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">
                      No recipes found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    };
   
    export default Recipe;