export default function(dir, prefix = "") {
  const requireContext = require.context(dir, true, /\.vue$/);
  function getFromContext(context) {
    return context.keys().reduce((ret, key) => {
      const component = context(key);
      ret[key.slice(2, -4)] = component.default;
      return ret;
    }, {});
  }
  const controls = getFromContext(requireContext);
  return {
    controls,
    prefix
  };
}
