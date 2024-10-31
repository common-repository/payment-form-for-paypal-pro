jQuery(function()
	{
		(function( blocks, element ) {
            var el = wp.element.createElement,
                source 		= blocks.source,
	            InspectorControls   = ('blockEditor' in wp) ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
		    var category 	= {slug:'payment-form-for-paypal-prol', title : 'Payment Form for PayPal Pro'};

		    var _wp$components = wp.components,
                 SelectControl = _wp$components.SelectControl,
                 ServerSideRender = wp.serverSideRender;                
                
			/* Plugin Category */
			blocks.getCategories().push({slug: 'cpcfwpppro', title: 'Payment Form for PayPal Pro'}) ;

			
            /* ICONS */
	        const iconcpcfwpppro = el('img', { width: 20, height: 20, src:  "data:image/gif;base64,R0lGODlhFAARAJEAAP8AJAAA////AAAAACwAAAAAFAARAAACOYyPqcLt3wycTwqFA7OU8g5lYgJ62nUwANCsLLqlwtrS8MTSOmDJ8/t79Ti2YIwC/EVOpQqzuRyJCgA7" } );            

			/* Form's shortcode */
			blocks.registerBlockType( 'cpcfwpppro/form-rendering', {
                title: 'Payment Form for PayPal Pro', 
                icon: iconcpcfwpppro,    
                category: 'cpcfwpppro',
				supports: {
					customClassName: false,
					className: false
				},
				attributes: {
			      	  formId: {
			            type: 'string'
		              },
			      	  instanceId: {
			            type: 'string'
		              }
			      },           
	            edit: function( { attributes, className, isSelected, setAttributes }  ) {             
                    const formOptions = cpcfwpppro_forms.forms;
                    if (!formOptions.length)
                        return el("div", null, 'Please create a payment form first.' );
                    var iId = attributes.instanceId;
                    if (!iId)
                    {                        
                        iId = formOptions[0].value+parseInt(Math.random()*100000);
                        setAttributes({instanceId: iId });
                    }
                    if (!attributes.formId)
                        setAttributes({formId: formOptions[0].value });
                    cpcfwpppro_renderForm(iId);
			    	var focus = isSelected;
					return [
						!!focus && el(
							InspectorControls,
							{
								key: 'cpcfwpppro_inspector'
							},
							[
								el(
									'span',
									{
										key: 'cpcfwpppro_inspector_help',
										style:{fontStyle: 'italic'}
									},
									'If you need help: '
								),
								el(
									'a',
									{
										key		: 'cpcfwpppro_inspector_help_link',
										href	: 'https://cfpaypal.dwbooster.com/contact-us',
										target	: '_blank'
									},
									'CLICK HERE'
								)
							]
						),
						el(SelectControl, {
                                value: attributes.formId,
                                options: formOptions,
                                onChange: function(evt){         
                                    setAttributes({formId: evt});
                                    iId = evt+parseInt(Math.random()*100000);
                                    setAttributes({instanceId: iId });
                                    cpcfwpppro_renderForm(iId);                                   
			    				},
                        }),
                        el(ServerSideRender, {
                             block: "cpcfwpppro/form-rendering",
                             attributes: attributes
                        })
					];
				},

				save: function( props ) {
					return null;
				}
			});

		} )(
			window.wp.blocks,
			window.wp.element
		);
	}
);
function cpcfwpppro_renderForm(id) {      
    if (jQuery("#form_structure"+id).length)
    {
        try
        {
            var cp_appbooking_fbuilder_myconfig = {"obj":"{\"pub\":true,\"identifier\":\"_"+id+"\",\"messages\": {}}"};
            var f = jQuery("#fbuilder_"+id).fbuilder(jQuery.parseJSON(cp_appbooking_fbuilder_myconfig.obj));
            f.fBuild.loadData("form_structure"+id);                     
        } catch (e) { setTimeout ('cpcfwpppro_renderForm('+id+')',250);}
    }
    else
    {
        setTimeout ('cpcfwpppro_renderForm('+id+')',50);
    }
}