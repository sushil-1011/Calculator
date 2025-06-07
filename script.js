const $display = document.
querySelector('input[type="text"]');
const $buttons =document. 
querySelectorAll('input[type="button"]');
$buttons.forEach(($button) => {
    $button.addEventListener(
        'click',
        () => {
            const value = $button.value
            if ( value === 'C') {
                $display.value = '';
                return;
            }
            if (value === '←') { // Backspace button functionality
                $display.value = $display.value.slice(0, -1); // Remove the last character
                return;
            }
            if (value === 'π') { // Add the value of pi to the display
                $display.value += Math.PI.toFixed(8); // Use Math.PI (rounded to 8 decimal places if needed)
                return;
            }
            if (value === '×') { // Add the multiplication cross to the display
                $display.value += '*'; // Replace × with the multiplication operator
                return;
            }            
            if (value === '=') {
                // Not recommended
                const express = $display. 
                value.replace(/x/g, '*');
                $display.value = eval
                (express);
                return;
            }
            $display.value += value;
        }
    );
});