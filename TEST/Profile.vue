<div class="container-fluid">
            <div class="row">
                <div class="col-12">
                  <div class="card">
                      <div class="card-body  met-pro-bg">
                          <div class="met-profile">
                              <div class="row">
                                  <div class="col-lg-4 align-self-center mb-3 mb-lg-0">
                                      <div class="met-profile-main">
                                          <div class="met-profile-main-pic">
                                              <img src="{{picture}}"
                                                  alt="" class="rounded-circle">
                                              <span class="fro-profile_main-pic-change">
                                                  <i class="fas fa-camera"></i>
                                              </span>
                                          </div>
                                          <div class="met-profile_user-detail">
                                              <h3 class="met-user-name">{{name}} {{lastname}}</h3>
                                              <p class="mb-0 met-user-name-post">{{job}}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 ml-auto">
                                      <ul class="list-unstyled personal-detail">
                                          <li class=""><i class="dripicons-phone mr-2 text-info font-18"></i> <b>
                                                  Telefono </b> : {{phone}}</li>
                                          <li class="mt-2"><i class="dripicons-mail text-info font-18 mt-2 mr-2"></i>
                                              <b> Email </b> : {{email}}
                                          </li>
                                          <li class="mt-2"><i
                                                  class="dripicons-location text-info font-18 mt-2 mr-2"></i>
                                              <b>Indirizzo</b> : {{address}}
                                          </li>
                                      </ul>
                                      <div class="button-list btn-social-icon">
                                          <button type="button" class="btn btn-blue btn-circle">
                                              <i class="fab fa-facebook-f"><a href="{{facebook}}"></a></i>
                                          </button>

                                          <button type="button" class="btn btn-pink btn-circle ml-2">
                                              <i class="fab fa-instagram"><a href="{{instagram}}"></a></i>
                                          </button>

                                          <button type="button" class="btn btn-info btn-circle  ml-2">
                                              <i class="fab fa-linkedin"><a href="{{linkedin}}"></a></i>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <ul class="nav nav-pills mb-0 ml-0" id="pills-tab" role="tablist">
                              <li class="nav-item">
                                  <a class="nav-link active" id="general_detail_tab" data-toggle="pill"
                                      href="#general_detail">Scheda contatto</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="portfolio_detail_tab" data-toggle="pill"
                                      href="#portfolio_detail">Consensi e privacy</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="settings_detail_tab" data-toggle="pill"
                                      href="#settings_detail">Modifica</a>
                              </li>
                          </ul>
                      </div>
                  </div>                
                </div>
            </div> 

            <div class="row">
                <div class="col-12">
                    <div class="tab-content detail-list" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="general_detail">

                            <div class="row d-flex">
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                <div class="h-100 card dash-data-card text-center">
                                    <div class="card-body">
                                        <div class="h-85 row">
                                            <div class="icon-info">
                                                <img class="col-sm-12 col-md-8 p-0"
                                                    src="/wp-content/themes/Impreza-child/plugin/integration/core/theme/assets/images/placeholder.png">
                                            </div>
                                        </div>
                                        <div class="h-10 row">
                                            <h6 class="w-100 font-14 text-dark text-center mt-1">Affidabilità cliente</h6>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 row">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-shopping-cart bg-soft-purple"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 row">
                                              <h3 class="w-100 text-dark">{{annualMoney}}</h3>
                                              <h6 class="w-100 font-14 text-dark">Totale fatturato annuo</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 row">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                              <i class="far fa-calendar-alt bg-soft-secondary"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 row">
                                              <h3 class="w-100 text-dark">{{meetingAmount}}</h3>
                                              <h6 class="w-100 font-14 text-dark">Appuntamenti ultimo anno</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 row">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-clipboard-check bg-soft-success"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 row">
                                              <h3 class="w-100 text-dark">{{servicesAmount}}</h3>
                                              <h6 class="w-100 font-14 text-dark">Totale servizi richiesti</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 row">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-user-alt-slash bg-soft-pink"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 row">
                                              <h3 class="w-100 text-dark">{{canceledMeetings}}</h3>
                                              <h6 class="w-100 font-14 text-dark">Appuntamenti cancellati</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 row">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-user-times bg-soft-warning"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 row">
                                              <h3 class="w-100 text-dark">{{missedMeetings}}</h3>
                                              <h6 class="w-100 font-14 text-dark">Appuntamenti mancati</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-lg-4">
                                  <div class="card">
                                      <div class="card-body">
                                          <h4 class="header-title mt-0">Trendings</h4>
                                      </div>
                                      <div class="col-12 mx-auto mb-5" id="chartdiv" style="height:200px !important;"></div>
                                  </div>                                    
                                  <div class="card">
                                      <div class="card-body">
                                          <h4 class="header-title mt-0 mb-3">Last Trend</h4>
                                          <div class="text-right mt-3">
                                              <span class="bg-light p-2 rounded small">Aggiornato ogni 12h</span>
                                          </div>

                                          <div class="skills mt-4">

                                              <for data="trends">

                                                  <div class="skill-box">
                                                      <h6 class="skill-title">{{name}}</h6>
                                                      <div class="progress-line">
                                                          <span data-percent="{{value}}" style="width: {{value}}%;">
                                                              <span class="percent-tooltip">{{value}}%</span>
                                                          </span>
                                                      </div>
                                                  </div>

                                              </for>

                                          </div>
                                      </div>
                                  </div>                       
                                </div>
                                <div class="col-md-12 col-lg-8">
                                    <div class="h-100 row">
                                      <div class="col-12 mb-3">
                                          <div class="h-100 card">
                                              <div class="card-body">
                                                  <h4 class="header-title mt-0">Grafico Appuntamenti</h4>
                                                  <div id="appuntamentiChart">
                                                  </div>
                                              </div>
                                          </div>
                                      </div>                                    
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                              <div class="col-12">
                                  <div class="card">
                                      <div class="card-body">
                                          <!-- <button class="btn btn-gradient-primary px-4 float-right mt-0 mb-3"><i
                                                                                      class="mdi mdi-plus-circle-outline mr-2"></i>Aggiungi
                                                                                  appuntamento</button> -->
                                          <h4 class="header-title mt-0 mb-3">Ultimi Appuntamenti</h4>
                                          <div class="table-responsive dash-social">
                                              <div id="datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer overflow-hidden mb-0">
                                                  <div class="row">
                                                      <div class="col-12">
                                                          <table id="datatable" class="table dataTable no-footer" role="grid"
                                                              aria-describedby="datatable_info">
                                                              <thead class="thead-light">
                                                                  <tr role="row">
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Email: activate to sort column ascending" style="width: 192px;">
                                                                          Servizio</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Phone No: activate to sort column ascending" style="width: 148px;">
                                                                          Data</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Country: activate to sort column ascending" style="width: 223px;">
                                                                          Calendario</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Action: activate to sort column ascending" style="width: 112px;">
                                                                          Descrizione</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Action: activate to sort column ascending" style="width: 112px;">
                                                                          Azioni</th>
                                                                  </tr>
                                                                  <!--end tr-->
                                                              </thead>

                                                              <tbody>

                                                                  <for data="lastMeetings">
                                                                      <tr role="row" class="{{class}}">
                                                                          <td>{{service}}</td>
                                                                          <td>{{date}}</td>
                                                                          <td>{{calendar}}</td>
                                                                          <td>{{description}}</td>
                                                                          <td>
                                                                              <a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a>
                                                                          </td>
                                                                      </tr>
                                                                  </for>

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>                            
                            </div>
                        </div>

                        <div class="tab-pane fade" id="portfolio_detail">
                            <div class="row">
                                <div class="col-12">
                                  <div id="mab-tab-privacy" class="row">
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-shield-check bg-soft-danger"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Consenso trattamento dati:</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <if data="{{privacyConsent}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyConsent" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyConsent"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyConsent}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyConsent">
                                                                  <label class="custom-control-label text-muted" for="privacyConsent"></label>
                                                              </div>
                                                          </if>

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-chat-processing bg-soft-success"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Comunicazioni di servizio (messaggi pre appuntamento):</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <if data="{{privacyMail}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMail" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyMail"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyMail}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMail">
                                                                  <label class="custom-control-label text-muted" for="privacyMail"></label>
                                                              </div>
                                                          </if>

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-bullhorn bg-soft-warning"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Marketing e promozioni (follow-up):</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <if data="{{privacyMarketing}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMarketing" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyMarketing"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyMarketing}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMarketing">
                                                                  <label class="custom-control-label text-muted" for="privacyMarketing"></label>
                                                              </div>
                                                          </if>

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <input type="hidden" name="nonce" id="nonce" value="{{postNonce}}">
                                          <input type="hidden" name="ajaxurl" id="ajaxurl" value="{{postAjaxurl}}">
                                          <input type="hidden" name="entryid" id="entryid" value="{{postEntryId}}">
                                          <button id="btn-save-privacy" class="btn btn-gradient-primary btn-lg px-4 mt-3 float-right mb-0">Aggiorna</button>
                                          <button id="btn-saving-privacy" class="btn btn-gradient-primary btn-lg px-4 mt-3 float-right mb-0 hidden">
                                          <i class="fa fa-spinner spinner"></i></button>
                                      </div>
                                  </div>                                
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="settings_detail">
                        </div>
                    </div>
                </div>
            </div>

    </div>