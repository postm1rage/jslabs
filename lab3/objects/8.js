function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function() {
        console.log('Name: ' + this.name + ', Version: ' + this.version);
    };
}

let myBrowser = new Browser('Microsoft Internet Explorer', '9.0');
myBrowser.aboutBrowser();