* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2e7d32;
  padding: 20px;
}

.container {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.subtitle {
  color: #66bb6a;
  margin-bottom: 30px;
}

/* 四葉草圖形 */
.clover-container {
  width: 140px;
  height: 140px;
  position: relative;
  margin: 0 auto 20px;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.clover-container:hover {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 12px rgba(76, 175, 80, 0.6));
}

.leaf {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #4caf50;
  border-radius: 50% 50% 0 50%;
  transition: transform 0.4s ease;
}

.leaf-1 { top: 15px; left: 15px; transform: rotate(0deg); }
.leaf-2 { top: 15px; right: 15px; transform: rotate(90deg); }
.leaf-3 { bottom: 25px; right: 15px; transform: rotate(180deg); }
.leaf-4 { bottom: 25px; left: 15px; transform: rotate(270deg); }

.stem {
  position: absolute;
  bottom: 0;
  left: 65px;
  width: 10px;
  height: 45px;
  background: #388e3c;
  border-radius: 5px;
  transform: rotate(-10deg);
  z-index: -1;
}

.hint {
  font-size: 0.9rem;
  color: #81c784;
  margin-bottom: 10px;
}

.blessing-text {
  min-height: 30px;
  font-weight: bold;
  color: #1b5e20;
  margin-bottom: 25px;
  transition: opacity 0.3s;
}

.story-section {
  text-align: left;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.story-section h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.story-section p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #424242;
  margin-bottom: 10px;
}

.meaning-list {
  list-style: none;
  font-size: 0.9rem;
  color: #388e3c;
}

.meaning-list li {
  margin: 4px 0;
}
