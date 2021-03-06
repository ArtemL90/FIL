<div class="popup-outer js_popup-outer">
    <div class="popup-request__outer js_popup-request__outer">
        <div class="popup-request__close close-btn  js_close-btn">
                 <div class="close-btn__line">
                     <div class="close-btn__line-dote"></div>
                     <div class="close-btn__line-dote"></div>
                 </div>
                 <div class="close-btn__line">
                     <div class="close-btn__line-dote"></div>
                 </div>
                 <div class="close-btn__line">
                     <div class="close-btn__line-dote"></div>
                     <div class="close-btn__line-dote"></div>
                 </div>
        </div>
        <form action="from-popup.php" method="POST" class="popup-request js_popup-request" name="popup">
            <h3 class="popup-request__ttl">GET IN THE KNOW</h3>
            <div class="popup-request__itm-outer js_popup-input-outer">
                 <input  tabindex = "0" id="popup-request__name " class="popup-request__itm js_popup-input" name="popup-name" type="text" placeholder="Name" required>
            </div>
            <div class="popup-request__itm-outer js_popup-input-outer">
                <input  tabindex = "0" id="popup-request__phone " class="popup-request__itm js_popup-input" name="popup-phone" type="text" placeholder="Phone number">
            </div>
            <div class="popup-request__itm-outer js_popup-input-outer">
                <input  tabindex = "0" id="popup-request__mail " class="popup-request__itm js_popup-input " name="popup-mail" type="text" placeholder="E-mail"  required>
            </div>
            <button type="submit" class="popup-request__btn circle-el circle-btn js_popup-request-submit">
                <span class="circle-btn__txt">Send</span> 
            </button>  
        </form>
        <div class="thanks js__thanks">
            <h3 class="thanks__ttl">Thanks for request!</h3>
            <div class="thanks__txt">You can continue shopping on our website</div>
            <button  class="thanks__btn circle-el circle-btn js_close-btn">
                <span class="circle-btn__txt">Shop</span>
            </button>
        </div>
    </div>
</div>