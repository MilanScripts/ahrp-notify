(function() {
    const container = document.getElementById('notifications-container');
    
    function createNotification(type, title, message, duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const content = document.createElement('div');
        content.className = 'notification-content';
        
        const titleElement = document.createElement('div');
        titleElement.className = 'notification-title';
        titleElement.textContent = title;
        content.appendChild(titleElement);
        
        const messageElement = document.createElement('div');
        messageElement.className = 'notification-message';
        messageElement.textContent = message;
        content.appendChild(messageElement);
        
        const closeButton = document.createElement('button');
        closeButton.className = 'notification-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            removeNotification(notification);
        });
        
        const progress = document.createElement('div');
        progress.className = 'notification-progress';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'notification-progress-bar';
        progressBar.style.animation = `progress ${duration}ms linear forwards`;
        
        progress.appendChild(progressBar);
        
        notification.appendChild(content);
        notification.appendChild(closeButton);
        notification.appendChild(progress);
        
        container.appendChild(notification);
        
        setTimeout(() => {
            removeNotification(notification);
        }, duration);
        
        return notification;
    }
    
    function removeNotification(notification) {
        if (!notification || notification.classList.contains('removing')) return;
        
        notification.classList.add('removing');
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    window.addEventListener('message', function(event) {
        const data = event.data;
        
        if (data.action === 'notify') {
            createNotification(
                data.type || 'info',
                data.title || '',
                data.message || '',
                data.duration || 5000
            );
        }
    });
    
    if (!window.invokeNative) {
        window.showNotification = function(type, title, message, duration) {
            createNotification(type, title, message, duration);
        };
    }
})();