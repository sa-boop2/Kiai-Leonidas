/**
 * Master Switcher Logic for Unified Kiai & Leonidas Transformation Hub
 */

const UnifiedMaster = {
  state: {
    activeApp: 'kiai' // 'kiai' | 'leonidas'
  },

  init() {
    // Request permanent browser storage persistence for long-time data saving
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then(granted => {
        console.log('Persistent browser storage status:', granted);
      }).catch(err => console.warn('Storage persist request failed:', err));
    }

    // Load persisted active app state
    const savedApp = localStorage.getItem('unified_active_app');
    if (savedApp === 'kiai' || savedApp === 'leonidas') {
      this.state.activeApp = savedApp;
    }

    this.renderState();
    this.setupEventListeners();
    this.setupIframeCoordination();
    this.initAudioKeeper();
  },

  switchApp(targetApp) {
    if (this.state.activeApp === targetApp) return;

    this.state.activeApp = targetApp;
    localStorage.setItem('unified_active_app', targetApp);

    // Trigger visual ripple transition
    this.triggerRipple(targetApp);

    // Update DOM state
    this.renderState();
  },

  toggleApp() {
    const nextApp = this.state.activeApp === 'kiai' ? 'leonidas' : 'kiai';
    this.switchApp(nextApp);
  },

  renderState() {
    document.body.setAttribute('data-active-app', this.state.activeApp);

    // Update browser title
    document.title = this.state.activeApp === 'kiai' 
      ? 'Kiai — Martial Arts Prep' 
      : 'Project Leonidas — Transformation Hub';
  },

  triggerRipple(appName) {
    const ripple = document.getElementById('switchRipple');
    if (!ripple) return;

    ripple.className = `switch-ripple active ripple-${appName}`;
    
    setTimeout(() => {
      ripple.className = 'switch-ripple';
    }, 650);
  },

  initAudioKeeper() {
    const audio = document.getElementById('masterSleepKeeper');
    if (!audio) return;

    const unlockAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('click', unlockAudio);
    };

    window.addEventListener('touchstart', unlockAudio, { once: true });
    window.addEventListener('click', unlockAudio, { once: true });
  },

  setupEventListeners() {
    // Cross-iframe PostMessage Relay
    window.addEventListener('message', (e) => {
      if (e.data && e.data.action === 'switchApp' && (e.data.target === 'kiai' || e.data.target === 'leonidas')) {
        this.switchApp(e.data.target);
      }
    });

    // Global Keyboard Shortcuts (Ctrl + Space or Alt + 1 / Alt + 2)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.code === 'Space') || (e.altKey && e.code === 'KeyS')) {
        e.preventDefault();
        this.toggleApp();
      } else if (e.altKey && e.code === 'Digit1') {
        e.preventDefault();
        this.switchApp('kiai');
      } else if (e.altKey && e.code === 'Digit2') {
        e.preventDefault();
        this.switchApp('leonidas');
      }
    });
  },

  setupIframeCoordination() {
    const iframes = ['iframeKiai', 'iframeLeonidas'];
    
    iframes.forEach(id => {
      const frame = document.getElementById(id);
      if (!frame) return;

      frame.addEventListener('load', () => {
        try {
          const frameWin = frame.contentWindow;
          if (!frameWin) return;

          // Relay keydown events from inside iframe to master parent
          frameWin.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.code === 'Space') || (e.altKey && e.code === 'KeyS')) {
              e.preventDefault();
              this.toggleApp();
            } else if (e.altKey && e.code === 'Digit1') {
              e.preventDefault();
              this.switchApp('kiai');
            } else if (e.altKey && e.code === 'Digit2') {
              e.preventDefault();
              this.switchApp('leonidas');
            }
          });
        } catch (err) {
          // Cross-origin restriction if opened over local file:// without web server
        }
      });
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  UnifiedMaster.init();
});
