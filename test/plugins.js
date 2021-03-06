var ResolverFactory = require("../").ResolverFactory;
var CloneBasenamePlugin = require("../lib/CloneBasenamePlugin");
var should = require("should");
var path = require("path");

describe("plugins", function() {
	it("should resolve with the CloneBasenamePlugin", function(done) {
		var resolver = ResolverFactory.createResolver({
			fileSystem: require("fs"),
			plugins: [
				new CloneBasenamePlugin("after-existing-directory", "undescribed-raw-file")
			]
		});

		resolver.resolve({}, __dirname, "./fixtures/directory-default", function(err, result) {
			if(err) return done(err);
			result.should.be.eql(path.resolve(__dirname, "fixtures/directory-default/directory-default.js"));
			done();
		});
	});
});
