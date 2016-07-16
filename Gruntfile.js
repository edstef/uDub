module.exports = function(grunt) {
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9000,
					protocol: "http",
					hostname: "localhost",
					base: ".",
					directory: null,
					open: true,
					keepalive: true,
					middleware: function(connect, options, middlewares) {
						connect().use(function (req, res, next) {
						  res.setHeader('Access-Control-Allow-Origin', '*');
						  next();
						})
          return middlewares;
        }
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}
