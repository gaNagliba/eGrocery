// Scrollspy
document.addEventListener('DOMContentLoaded', function() {
    var scrollSpyList = document.querySelectorAll('[data-spy="scroll"]');
    scrollSpyList.forEach(function(scrollSpy) {
        var targets = [];
        var links = scrollSpy.querySelectorAll('a[href^="#"]');
        links.forEach(function(link) {
            var targetId = link.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);
            if (target) {
                targets.push(target);
            }
        });

        window.addEventListener('scroll', function() {
            var fromTop = window.scrollY;
            targets.forEach(function(target) {
                if (target.offsetTop <= fromTop && target.offsetTop + target.offsetHeight > fromTop) {
                    links.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    });
});

// Tabs
document.addEventListener('DOMContentLoaded', function() {
    var tabTriggers = document.querySelectorAll('[data-toggle="tab"]');
    tabTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            var parent = this.closest('ul.nav');
            var activeTab = parent.querySelector('.active');
            var activeTabContent = document.querySelector(activeTab.getAttribute('href'));

            if (!this.parentNode.classList.contains('active')) {
                activeTab.classList.remove('active');
                activeTabContent.classList.remove('active');
                this.parentNode.classList.add('active');
                target.classList.add('active');
            }
        });
    });
});

// Popovers and Tooltips
// Implement custom popovers and tooltips using CSS and HTML

// Affix
window.addEventListener('load', function() {
    var affixElements = document.querySelectorAll('[data-spy="affix"]');
    affixElements.forEach(function(element) {
        var offsetTop = element.dataset.offsetTop || 0;
        var offsetBottom = element.dataset.offsetBottom || 0;
        var offset = {
            top: parseInt(offsetTop, 10),
            bottom: parseInt(offsetBottom, 10)
        };

        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var windowHeight = window.innerHeight;
            var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                document.documentElement.clientHeight, document.documentElement.scrollHeight,
                document.documentElement.offsetHeight);
            var position = element.getBoundingClientRect();

            if (position.top <= offset.top && position.bottom >= windowHeight - offset.bottom) {
                element.classList.add('affix');
            } else {
                element.classList.remove('affix');
            }
        });
    });
});
