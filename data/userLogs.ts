const userLogs = [
    {
      loggedAt: "11/01/2024 08:42:06",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2af",
        browserName: "Chrome 12",
        browserType: "Browser (mobile)",
        browserVersion: "120.0.0.0",
        osName: "Windows 10",
        deviceType: "Computer",
        originCountry: "IN",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 09:20:15",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::2",
        browserName: "Safari 14",
        browserType: "Browser",
        browserVersion: "14.0.0.0",
        osName: "iOS",
        deviceType: "Mobile",
        originCountry: "CA",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 10:35:45",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::1",
        browserName: "Edge 20",
        browserType: "Browser",
        browserVersion: "20.0.0.0",
        osName: "Windows 11",
        deviceType: "Tablet",
        originCountry: "UK",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 12:05:30",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2bf",
        browserName: "Firefox 18",
        browserType: "Browser",
        browserVersion: "18.0.0.0",
        osName: "Linux",
        deviceType: "Desktop",
        originCountry: "DE",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 13:40:12",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::2",
        browserName: "Chrome 15",
        browserType: "Browser (mobile)",
        browserVersion: "150.0.0.0",
        osName: "Android",
        deviceType: "Smartphone",
        originCountry: "FR",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    // Add 14 more log entries here...
    {
      loggedAt: "11/01/2024 15:18:45",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::3",
        browserName: "Opera 10",
        browserType: "Browser",
        browserVersion: "10.0.0.0",
        osName: "Windows 8",
        deviceType: "Laptop",
        originCountry: "JP",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 16:55:30",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2cf",
        browserName: "Edge 25",
        browserType: "Browser",
        browserVersion: "25.0.0.0",
        osName: "Windows 11",
        deviceType: "Desktop",
        originCountry: "AU",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 18:30:12",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::3",
        browserName: "Safari 16",
        browserType: "Browser",
        browserVersion: "16.0.0.0",
        osName: "MacOS",
        deviceType: "Laptop",
        originCountry: "CA",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 20:12:55",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2001:db8::4",
        browserName: "Firefox 22",
        browserType: "Browser",
        browserVersion: "22.0.0.0",
        osName: "Linux",
        deviceType: "Desktop",
        originCountry: "US",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 22:05:30",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2df",
        browserName: "Chrome 18",
        browserType: "Browser (mobile)",
        browserVersion: "180.0.0.0",
        osName: "Android",
        deviceType: "Tablet",
        originCountry: "FR",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "11/01/2024 23:50:12",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::4",
        browserName: "Opera 12",
        browserType: "Browser",
        browserVersion: "12.0.0.0",
        osName: "Windows 10",
        deviceType: "Computer",
        originCountry: "UK",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 01:30:45",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::5",
        browserName: "Edge 30",
        browserType: "Browser",
        browserVersion: "30.0.0.0",
        osName: "Windows 11",
        deviceType: "Desktop",
        originCountry: "US",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 03:18:30",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2ef",
        browserName: "Safari 18",
        browserType: "Browser",
        browserVersion: "18.0.0.0",
        osName: "MacOS",
        deviceType: "Laptop",
        originCountry: "CA",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 05:05:12",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::5",
        browserName: "Firefox 25",
        browserType: "Browser",
        browserVersion: "25.0.0.0",
        osName: "Linux",
        deviceType: "Desktop",
        originCountry: "DE",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 06:50:55",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2001:db8::6",
        browserName: "Chrome 20",
        browserType: "Browser (mobile)",
        browserVersion: "200.0.0.0",
        osName: "Android",
        deviceType: "Smartphone",
        originCountry: "JP",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 08:30:30",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2405:201:c00f:201d:b455:36d6:9d4a:e2ff",
        browserName: "Edge 35",
        browserType: "Browser",
        browserVersion: "35.0.0.0",
        osName: "Windows 11",
        deviceType: "Tablet",
        originCountry: "AU",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 10:12:12",
      status: "LOGIN",
      deviceDetails: {
        ipAddress: "2600:1700:1c0:3900::6",
        browserName: "Opera 15",
        browserType: "Browser",
        browserVersion: "15.0.0.0",
        osName: "Windows 10",
        deviceType: "Computer",
        originCountry: "FR",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 12:05:45",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::7",
        browserName: "Safari 20",
        browserType: "Browser",
        browserVersion: "20.0.0.0",
        osName: "MacOS",
        deviceType: "Laptop",
        originCountry: "UK",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 12:07:45",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::7",
        browserName: "Safari 20",
        browserType: "Browser",
        browserVersion: "20.0.0.0",
        osName: "MacOS",
        deviceType: "Laptop",
        originCountry: "UK",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
    {
      loggedAt: "12/01/2024 12:08:45",
      status: "LOGOUT",
      deviceDetails: {
        ipAddress: "2001:db8::7",
        browserName: "Safari 20",
        browserType: "Browser",
        browserVersion: "20.0.0.0",
        osName: "MacOS",
        deviceType: "Laptop",
        originCountry: "UK",
      },
      location:{
        latitude:"21.3.222.2",
        longitude:"232.2323.12321"
      }
    },
  ];
  
  
export default userLogs