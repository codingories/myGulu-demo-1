<template>
  <div>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <g-sticky distance="100">
      <div style="border: 1px solid red;">我是粘滞内容</div>
    </g-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <p>段落11</p>
    <p>段落12</p>
    <p>段落13</p>
    <p>段落14</p>
    <p>段落15</p>
    <p>段落16</p>
    <p>段落17</p>
    <p>段落18</p>
    <p>段落19</p>
    <p>段落20</p>
    <p>段落21</p>
    <p>段落22</p>
    <p>段落23</p>
    <p>段落24</p>
    <p>段落25</p>
    <p>段落26</p>
    <p>段落27</p>
    <p>段落28</p>
    <p>段落29</p>
    <p>段落30</p>
    <p>段落31</p>
    <p>段落32</p>
    <p>段落33</p>
    <p>段落34</p>
    <p>段落35</p>
    <p>段落36</p>
    <p>段落37</p>
    <p>段落38</p>
    <p>段落39</p>
    <p>段落40</p>
    <p>段落41</p>
    <p>段落42</p>
    <p>段落43</p>
    <p>段落44</p>
    <p>段落45</p>
    <p>段落46</p>
    <p>段落47</p>
    <p>段落48</p>
    <p>段落49</p>
    <p>段落50</p>
    <p>段落51</p>
    <p>段落52</p>
    <p>段落53</p>
    <p>段落54</p>
    <p>段落55</p>
    <p>段落56</p>
    <p>段落57</p>
    <p>段落58</p>
    <p>段落59</p>
    <p>段落60</p>
    <p>段落61</p>
    <p>段落62</p>
    <p>段落63</p>
    <p>段落64</p>
    <p>段落65</p>
    <p>段落66</p>
    <p>段落67</p>
    <p>段落68</p>
    <p>段落69</p>
    <p>段落70</p>
    <p>段落71</p>
    <p>段落72</p>
    <p>段落73</p>
    <p>段落74</p>
    <p>段落75</p>
    <p>段落76</p>
    <p>段落77</p>
    <p>段落78</p>
    <p>段落79</p>
    <p>段落80</p>
    <p>段落81</p>
    <p>段落82</p>
    <p>段落83</p>
    <p>段落84</p>
    <p>段落85</p>
    <p>段落86</p>
    <p>段落87</p>
    <p>段落88</p>
    <p>段落89</p>
    <p>段落90</p>
    <p>段落91</p>
    <p>段落92</p>
    <p>段落93</p>
    <p>段落94</p>
    <p>段落95</p>
    <p>段落96</p>
    <p>段落97</p>
    <p>段落98</p>
    <p>段落99</p>
    <p>段落100</p>
  </div>
</template>
<script>
import GSticky from './sticky'

export default {
  name: '',
  components: {
    GSticky
  },

  data() {
    return {
      fileList: [],
      error: ''
    }
  },
  methods: {

    parseResponse(response) {
      console.log(`response`)
      console.log(response)
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    },


  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
