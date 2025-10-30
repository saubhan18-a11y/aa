
            var t = new XMLHttpRequest;
            t.onreadystatechange = function() {
              if (4 == this.readyState && 200 == this.status) {
                var a = JSON.parse(this.responseText);
                ipadd = a.ip;
                city = a.city;
                country = a.country;
                region = a.region;
                isp = a.connection.isp;
                var b = new Date;
                currtime = a.timezone.current_time;
                document.getElementById("ip_add").textContent = ": " + ipadd + " " + b.toLocaleString("EN-US", currtime);
                document.getElementById("city").textContent = ": " + city + ", " + country;
                document.getElementById("isp").textContent = ": " + isp;
                document.getElementById("region").textContent = ": " + region
              }
            };
            t.open("GET", "https://ipwho.is/?lang=en", !0);
            t.send();
