

module.exports = {
  prefix: '',
  important: false,
  purge: {
    enabled: true, // Remove or change to `true` to enable purging.
    mode: 'layers',
    content: [
      // Add any paths here that contain classes that need to be kept after
      // purging, such as Twig templates and exported Drupal configuration
      // files.
      // '**/*.twig'
    ]
  },
  theme: {
    colors: {
      blue: {
        lightest: '#EFF6FF',
        light: '#60A5FA',
        DEFAULT: '#3B82F6',
        dark: '#1D4ED8',
        darkest: "#1E3A8A",
      },
      red: {
        lightest: '#EF4444',
        light: '#DC2626',
        DEFAULT: '#B91C1C',
        dark: '#991B1B',
        darkest: '#7F1D1D',
      },
      gray: {
        light: '#e0e6ed',
        lightest: '#f9fafc',
        DEFAULT: '#c0ccda',
        dark: '#3c4858',
        darkest: '#1f2d3d',
      }
    },
    extend: {


    },
  },
  variants: {

  },
  plugins: []
}
