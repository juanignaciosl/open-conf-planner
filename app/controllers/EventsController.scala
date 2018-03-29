package controllers

import java.util.UUID

import javax.inject._
import play.api.libs.json.{JsError, Json}
import play.api.mvc.{AbstractController, ControllerComponents}

case class Event(id: UUID = UUID.randomUUID(), name: String)

@Singleton
class EventsController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  implicit val eventReads = Json.using[Json.WithDefaultValues].format[Event]
  implicit val eventWrites = Json.writes[Event]

  def create = Action(parse.json) { request =>
    val eventResult = request.body.validate[Event]
    eventResult.fold(
      errors => {
        BadRequest(Json.obj("status" -> "KO", "message" -> JsError.toJson(errors)))
      },
      event => {
        Ok(Json.toJson(event))
      }
    )
  }
}
