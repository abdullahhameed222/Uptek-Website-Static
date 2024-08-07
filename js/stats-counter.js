const counters = document.querySelectorAll(".stats__counter");
      console.log(counters)
      const speed = 500;
      
      counters.forEach(counter=> {
        const symbol=counter.getAttribute('data-symbol') || '';
      
        const formatNumber = (number, symbol) => {
          if (symbol === 'M') {
            number = number / 1000000; 
            const formattedNumber=number.toFixed(1) + symbol;
            return '$'+ formattedNumber
          }
          return number.toLocaleString() + symbol;
        };
      
        const updateCount = () => {
          const target= +counter.getAttribute("data-target");
          const count= +counter.innerText.replace(symbol,' ');
          console.log(count)
          console.log(target)
      
          const inc = target / speed;
      
          if (count < target) {
            counter.innerText = Math.floor(count + inc) + 1, symbol;
            count.innerText = formatNumber(count,symbol)
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = formatNumber(target, symbol);
            // counter.innerText = symbol === '$' ? symbol + target: target + symbol
          }
        }
        updateCount()
      })