// Choose theme based on system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    jtd.setTheme('custom-dark');
  } else {
    jtd.setTheme('custom-light');
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  jtd.setTheme('custom-dark');
}

function documentReady(function_) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(function_, 1);
  } else {
    document.addEventListener('DOMContentLoaded', function_);
  }
}

// Add Copy button to code block
documentReady(function () {
  const codeBlocks = document.querySelectorAll('pre.highlight');

  codeBlocks.forEach(function (codeBlock) {
    const copyButton = document.createElement('button');
    copyButton.className = 'btn';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
      const code = codeBlock.querySelector('code').innerText.trim();
      window.navigator.clipboard.writeText(code);

      copyButton.innerText = 'Copied';
      const fourSeconds = 4000;

      setTimeout(function () {
        copyButton.innerText = 'Copy';
      }, fourSeconds);
    });
  });
});
