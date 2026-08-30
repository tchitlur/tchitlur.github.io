(function(){
  // Standard clinical print order: 4 columns x 3 rows.
  // amp = [P, Q, R, S, T] in millivolts, following normal adult lead morphology.
  var LEADS = [
    {n:"I",   amp:[ .12,-.05, .90,-.10, .25], recorded:true },
    {n:"aVR", amp:[-.12,-.02,-.35,-.55,-.22], recorded:false},
    {n:"V1",  amp:[ .08, 0,   .25,-1.05,-.10], recorded:false},
    {n:"V4",  amp:[ .12,-.04, 1.40,-.55, .45], recorded:false},
    {n:"II",  amp:[ .18,-.06, 1.20,-.12, .35], recorded:true },
    {n:"aVL", amp:[ .05,-.03, .40,-.12, .10], recorded:false},
    {n:"V2",  amp:[ .10, 0,   .45,-1.55, .55], recorded:false},
    {n:"V5",  amp:[ .12,-.05, 1.50,-.25, .35], recorded:false},
    {n:"III", amp:[ .08,-.04, .55,-.15, .15], recorded:false},
    {n:"aVF", amp:[ .12,-.05, .75,-.10, .22], recorded:false},
    {n:"V3",  amp:[ .10,-.02, .80,-1.15, .50], recorded:false},
    {n:"V6",  amp:[ .10,-.06, 1.20,-.12, .28], recorded:true }
  ];

  var W = 260, H = 104, BEATS = 2.35, N = 900;

  function g(t, mu, sd){ var z=(t-mu)/sd; return Math.exp(-0.5*z*z); }

  // One cardiac cycle, phase t in [0,1): P wave, QRS complex, T wave.
  function beat(t, a){
    return a[0]*g(t,.17,.024)   // P
         + a[1]*g(t,.290,.007)  // Q
         + a[2]*g(t,.320,.009)  // R
         + a[3]*g(t,.355,.011)  // S
         + a[4]*g(t,.560,.050); // T
  }

  function path(a){
    var i, vals = [], t, v, max = 0.001;
    for(i=0;i<N;i++){
      t = (i/N)*BEATS;
      v = beat(t - Math.floor(t), a);
      vals.push(v);
      if(Math.abs(v) > max) max = Math.abs(v);
    }
    var scale = (H*0.34)/max, mid = H*0.56, d = "";
    for(i=0;i<N;i++){
      d += (i?"L":"M") + ((i/(N-1))*W).toFixed(2) + " " + (mid - vals[i]*scale).toFixed(2) + " ";
    }
    return d.trim();
  }

  var host = document.getElementById("leads");
  if(!host) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var order = 0;

  LEADS.forEach(function(L){
    var cell = document.createElement("div");
    cell.className = "lead" + (L.recorded ? "" : " recon");
    // Recorded leads draw first, then the reconstructed ones fill in.
    var delay = L.recorded ? 0.15 : 0.95 + (order++) * 0.11;
    cell.innerHTML =
      '<span class="tag">' + L.n + '</span>' +
      '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="presentation">' +
        '<path class="trace" d="' + path(L.amp) + '"></path>' +
      '</svg>';
    host.appendChild(cell);

    if(!reduce){
      var p = cell.querySelector(".trace");
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.3,.7,.4,1) " + delay + "s";
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){ p.style.strokeDashoffset = 0; });
      });
    }
  });
})();
