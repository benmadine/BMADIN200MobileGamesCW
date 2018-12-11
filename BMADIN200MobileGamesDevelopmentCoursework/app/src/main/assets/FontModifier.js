//
// ─── FONT MODIFIER SCRIPT ───────────────────────────────────────────────────────
//

//
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: A R R A Y   F O R   T H E   D I F F E R E N T   P O S S I B L E   C O L O U R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


var colourList = ['white', 'black', 'red', 'green', 'blue', 'fuchsia']

//
// ────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: F O N T   M O D I F I E R   C L A S S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────
//


class FontModiferClass
{
    // Takes in a minimum and maximum font size.
    FontSize(minSize, maxSize)
    {
        // Returns a random value between the min and max size.
        return Math.random() * (maxSize - minSize) + minSize;
    }

    // Assings a random colour from the array.
    FontColour()
    {
        // Gets a random number from the array.
        var randomIndex =  Math.floor(Math.random() * colourList.length);
        // Sets the random number to is associated element in the array.
        var randColour = colourList[randomIndex];
        // Returns the element.
        return randColour;
    }
}