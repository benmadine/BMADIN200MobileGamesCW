var colourList = ['white', 'black', 'red', 'green', 'blue', 'fuchsia']

class FontModiferClass
{
    FontSize(minSize, maxSize)
    {
        return Math.random() * (maxSize - minSize) + minSize;
    }

    FontColour()
    {
        var randomIndex =  Math.floor(Math.random() * colourList.length);
        var randColour = colourList[randomIndex];
        return randColour;
    }
}