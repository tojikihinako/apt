gsap. registerPlugin (ScrollTrigger);

const imageContainer = document.querySelector ('.image-container');
const imageContainer2 = document.querySelector ('.image-container2');
const imageContainer3 = document.querySelector ('.image-container3');
const layers = document.querySelectorAll('.image > *');

gsap.set ('#layer1', { opacity: 0 });
gsap.set ('#layer2', { opacity: 0 });
gsap.set ('#layer3', { opacity: 0 });
gsap.set ('#layer4', { opacity: 0 });

gsap.set ('#layer21', { opacity: 1 });
gsap.set ('#layer22', { opacity: 1 });
gsap.set ('#layer23', { opacity: 1 });
gsap.set ('#layer24', { opacity: 0 });

gsap.set ('#layer31', { opacity: 1 });
gsap.set ('#layer32', { opacity: 1 });
gsap.set ('#layer33', { opacity: 1 });
gsap.set ('#layer34', { opacity: 0 });



// すべてのレイヤーを最初に非表示に設定
gsap.set('#layer1, #layer2, #layer3, #layer4', { opacity: 0 });

ScrollTrigger.create({
  trigger: imageContainer,
  start: 'top top',
  end: '+=1000',
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;

    if (progress < 0.25) {
      // レイヤー1を表示
      gsap.to('#layer1', { opacity: 1 });
      gsap.to('#layer2, #layer3, #layer4', { opacity: 0 });
    } else if (progress >= 0.25 && progress < 0.5) {
      // レイヤー2を表示
      gsap.to('#layer1,#layer2', { opacity: 1 });
      gsap.to('#layer3, #layer4', { opacity: 0 });
    } else if (progress >= 0.5 && progress < 0.85) {
      // レイヤー3を表示
      gsap.to('#layer1,#layer2,#layer3', { opacity: 1 });
      gsap.to('#layer4', { opacity: 0 });
    } else {
      // レイヤー4を表示
      gsap.to('#layer4', { opacity: 1 });
      gsap.to('#layer1, #layer2, #layer3', { opacity: 1 });
    }
  },
});

gsap.set('#layer21, #layer22, #layer23, #layer24', { opacity: 0 });

ScrollTrigger.create({
    trigger: imageContainer2,
    start: 'top top',
    end: '+=1000',
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;

      if (progress < 0.25) {
        // レイヤー1を表示
        gsap.to('#layer21', { opacity: 1 });
        gsap.to('#layer22, #layer23, #layer24', { opacity: 0 });
      } else if (progress >= 0.25 && progress < 0.5) {
        // レイヤー2を表示
        gsap.to('#layer21,#layer22', { opacity: 1 });
        gsap.to('#layer23, #layer24', { opacity: 0 });
      } else if (progress >= 0.5 && progress < 0.85) {
        // レイヤー3を表示
        gsap.to('#layer21,#layer22,#layer23', { opacity: 1 });
        gsap.to('#layer24', { opacity: 0 });
      } else {
        // レイヤー4を表示
        gsap.to('#layer24', { opacity: 1 });
        gsap.to('#layer21, #layer22, #layer23', { opacity: 1 });
      }
    },
  });

  gsap.set('#layer31, #layer32, #layer33, #layer34', { opacity: 0 });

  ScrollTrigger.create({
      trigger: imageContainer3,
      start: 'top top',
      end: '+=1000',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
  
        if (progress < 0.25) {
          // レイヤー1を表示
          gsap.to('#layer31', { opacity: 1 });
          gsap.to('#layer32, #layer33, #layer34', { opacity: 0 });
        } else if (progress >= 0.25 && progress < 0.5) {
          // レイヤー2を表示
          gsap.to('#layer31,#layer32', { opacity: 1 });
          gsap.to('#layer33, #layer34', { opacity: 0 });
        } else if (progress >= 0.5 && progress < 0.85) {
          // レイヤー3を表示
          gsap.to('#layer31,#layer32,#layer33', { opacity: 1 });
          gsap.to('#layer34', { opacity: 0 });
        } else {
          // レイヤー4を表示
          gsap.to('#layer34', { opacity: 1 });
          gsap.to('#layer31, #layer32, #layer33', { opacity: 1 });
        }
      },
    });